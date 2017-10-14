const data = [
	{
		"id": 1,
		"question": {
			"id": 1,
			"poll_id": 1,
			"label": "¿Cuál es tu framework favorito de front-end?"
		},
		"answers": [
			{
				"id": 1,
				"question_id": 1,
				"poll_id": 1,
				"label": "Angular"
			},
			{
				"id": 2,
				"question_id": 1,
				"poll_id": 1,
				"label": "React"
			},
			{
				"id": 3,
				"question_id": 1,
				"poll_id": 1,
				"label": "Vue"
			},
			{
				"id": 4,
				"question_id": 1,
				"poll_id": 1,
				"label": "Ember.js"
			},
			{
				"id": 5,
				"question_id": 1,
				"poll_id": 1,
				"label": "No uso framework"
			}
		],
		"votes": [
			{
				"id": 1,
				"user_id": 1,
				"answer_id": 1,
				"question_id": 1,
				"poll_id": 1
			}, {
				"id": 2,
				"user_id": 2,
				"answer_id": 2,
				"question_id": 1,
				"poll_id": 1
			}, {
				"id": 3,
				"user_id": 3,
				"answer_id": 2,
				"question_id": 1,
				"poll_id": 1
			}
		]
	}
];

module.exports = data;