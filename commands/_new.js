/*CMD
  command: /new
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

getMethodsForCoin('Dogecoin').isValidAddress(
    { 
     address: "A8XLg2yP8Bz9YU35KDXL6K7s5MtHL7w4nZ",
      onSuccess: "/onNewAddress",
      onError: "/onError",
} );


//var text = snakeToCamel('get_new_address')
//Bot.sendMessage(text)
