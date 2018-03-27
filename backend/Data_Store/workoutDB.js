const abWorkouts = require('./Abdomen_Data/abWorkouts');

const latWorkouts = require('./Back_Data/latWorkouts');
const rhomboidWorkouts = require('./Back_Data/rhomboidWorkouts');
const trapWorkouts = require('./Back_Data/trapWorkouts');

const chestWorkouts = require('./Chest_Data/chestWorkouts');

const gluteWorkouts = require('./Lower_Limbs_Data/gluteWorkouts');
const hamstringWorkouts = require('./Lower_Limbs_Data/hamstringWorkouts');
const quadWorkouts = require('./Lower_Limbs_Data/quadWorkouts');
const calfWorkouts = require('./Lower_Limbs_Data/calfWorkouts');

const armWorkouts = require('./Upper_Limbs_Data/armWorkouts');
const forearmWorkouts = require('./Upper_Limbs_Data/forearmWorkouts');
const shoulderWorkouts = require('./Upper_Limbs_Data/shoulderWorkouts');

workouts = [{...abWorkouts},{...armWorkouts},{...calfWorkouts},{...chestWorkouts},{...forearmWorkouts},
            {...gluteWorkouts},{...hamstringWorkouts},{...latWorkouts},{...quadWorkouts},
            {...rhomboidWorkouts},{...shoulderWorkouts},{...trapWorkouts}]
             
module.exports = workouts