const router = require('express')();
const AssignmentController = require('../controllers/controller');


router.get('/:id',
  AssignmentController.getOne,
  (req, res) => res.json(res.locals.assignment)
);
 

router.get('/',
  AssignmentController.getAll,
  (req, res) => res.json({assignments: res.locals.assignments})
);



module.exports = router;