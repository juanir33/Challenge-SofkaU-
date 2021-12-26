function getPlayer() {
    let usersLs = localStorage.getItem("players");
    let users = JSON.parse(usersLs);
    return users;
}
  
function topPlay(){
    
    let top = getPlayer();
    let sorted = top.sort((a, b)=> {
      if(a.prize > b.prize){
        return -1
      }else if(a.prize < b.prize){
        return 1
      }else{
        return 0
      }
    })
    sorted.forEach((player)=> {
      let data = document.createElement('tr');
        data.innerHTML = `      
        <td>${player.name}</td>            
        <td>${player.prize}</td>`;
      
      document.getElementById('table_players').appendChild(data)
  
    })
    
}


 
topPlay() 