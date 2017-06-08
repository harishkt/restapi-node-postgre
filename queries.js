import BlueBird from 'bluebird';
import pgPromise from 'pg-promise';
const options = {
	promise: BlueBird
};

const pgp = pgPromise(options);
const connString = 'postgres://localhost:5432/hobbies';
const db = pgp(connString);

// All query methods go here
export function getAllHobbies(req, res, next) {
	db.any('select * from hobs')
		.then((data) => {
				res.status(200)
					.json({
						status: 'success',
						data: data,
						message: 'Got all hobbies'
					});
		})
		.catch(err => next(err));
}

export function getSingleHobby(req, res, next) {
	const hobbyId = parseInt(req.params.id);
	db.one('select * from hobs where id = $1', hobbyId)
		.then((data) => {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved One Hobby'
				});
		})
		.catch(err => next(err));
}

export function createHobby(req, res, next) {
	db.none('insert into hobs(name, type, isFun, Description)' +
		'values($(name), $(type), $(isFun), $(Description))', req.body)
		.then(() => {
			res.status(200)
				.json({
					status: 'success',
					message: 'Added One Hobby'
				});
		})
		.catch(err => next(err));
}

export function updateHobby(req, res, next) {
	const { name, type, isFun, Description } = req.body
	db.none('update hobs set name=$1, type=$2, isFun=$3, Description=$4 where id=$5',
		[name, type, isFun, Description, parseInt(req.params.id) ])
		.then(() => {
			res.status(200)
				.json({
					status: 'success',
					message: 'Updated Hobby'
				})
		})
		.catch(err => next(err));
}

export function removeHobby(req, res, next) {
	db.result('delete from hobs where id = $1', req.params.id)
		.then((result) => {
			res.status(200)
				.json({
					status: 'success',
					message: `Removed ${result.rowCount} hobby`
				})
		})
		.catch(err => next(err));
}
