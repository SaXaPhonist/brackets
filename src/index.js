module.exports = function check(str, bracketsConfig) {
  const new_config = bracketsConfig.map((a) =>  `${a[0]}${a[1]}`);
  let len = str.length;
  while ( str !== '' ){
    new_config.forEach(el => {
     str = str.replace(el,'');});
    if (len === str.length){ return false}
    else { len = str.length };  
  }
  return true;
}
