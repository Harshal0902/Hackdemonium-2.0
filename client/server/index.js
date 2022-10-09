const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/l41inZANJ"
});

model.classify({
  imageUrl: "../dataset/test/123.jpg",
}).then((predictions) => {
  console.log("Predictions:", predictions);
}).catch((e) => {
  console.log("ERROR", e);
});