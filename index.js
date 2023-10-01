let name = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name,surprise){
  let messages = [];
  for(let i = 0;i<name.length;i++){
  let message = `Thank you, ${name[i]}, for the wonderful ${surprise} gift!`
  messages.push(message);
}
  return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");
function countDown(){
  let countDown = 0;
  while(countDown<11){
      console.log(countDown++)
  }
}
