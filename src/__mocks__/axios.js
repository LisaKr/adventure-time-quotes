// module.exports = {
//   get: () => {
//     return Promise.resolve({
//       data: [
//         {
//           finn: ["jj", "jjj"]
//         },
//         {
//           bmo: ["jjjj"]
//         }
//       ]
//     });
//   }
// };

export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        { name: "finn", quotes: ["jjj", "hhhh"] },
        { name: "bmo", quotes: ["jjkjkjkl", "hhh", "kkkk", "jjjjj"] }
      ]
    })
  )
};
