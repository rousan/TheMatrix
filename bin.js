// const BasicBeing = require('../BasicBeing');

// class Archaea extends BasicBeing {
//   constructor(id, name, birthLocation) {
//     super(id, name, birthLocation);

//     this.props.type = 'Archaea';
//   }
// }

// module.exports = Archaea;


// const randomInt = require('random-int');
// const randomColor = require('randomcolor');

// export default class Being {
//   get activities() {
//     return {
//       walk: this.walk.bind(this),
//       changebackgroundColor: this.changebackgroundColor.bind(this)
//     };
//   }

//   constructor(name) {
//     this.name = name;
//     this.init();
//   }

//   init() {
//     const node = document.createElement('div');
//     node.style.position = 'absolute';
//     node.style.width = '20px';
//     node.style.height = '20px';
//     node.style.background = 'red';

//     this.node = node;
//   }

//   async bootup(viewbox, addTo, position) {
//     this.viewbox = viewbox;

//     this.node.style.top = `${position.y}px`;
//     this.node.style.left = `${position.x}px`;
//     addTo.appendChild(this.node);

//     while (1) {
//       await this.think();
//     }
//   }

//   async think() {
//     const activityNames = Object.keys(this.activities);
//     const chosenActivity = randomInt(0, activityNames.length - 1);
//     console.log(activityNames[chosenActivity]);
//     await this.doAnActivity(this.activities[activityNames[chosenActivity]], 3000);
//   }

//   doAnActivity(activity, interval) {
//     return new Promise((res, rej) => {
//       const t1 = Date.now();
//       const timerId = setTimeout(function fn() {
//         activity();
//         const t2 = Date.now();
//         if ((t2 - t1) < interval) {
//           setTimeout(() => {
//             fn();
//           });
//         } else {
//           clearInterval(timerId);
//           res();
//         }
//       });
//     });
//   }

//   walk() {
//     let newX = parseInt(this.node.style.left, 10) + 1;
//     if (newX > this.viewbox.w) {
//       newX = 0;
//     }
//     this.node.style.left = `${newX}px`;
//   }

//   changebackgroundColor() {
//     this.node.style.backgroundColor = randomColor();
//   }

//   changeBorder() {

//   }
// }
