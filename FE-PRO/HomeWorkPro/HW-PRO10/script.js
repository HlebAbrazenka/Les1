let array = [
    {
    name: 'Steven',
    salary: 5000,
    user_name : 1
    }
    ];
    
    
    
    let div_root = document.querySelector('#root')
    
    for(let i = 0;i <= 5; i++){
      for(elem of array){
    
        let div_all_elements = document.createElement('div')
        div_all_elements.className = 'all_elements'
      
        let div_elem = document.createElement('div') 
        let p_name = document.createElement('p')
        let p_salary = document.createElement('p')
        let p_user = document.createElement('p')
      
    
        let images = document.createElement('img')
        images.src = 'https://i.ibb.co/tXqmKKR/1.png'
        images.className = 'images'
      
         let div_textContent = document.createElement('div')
         div_textContent.className = 'textContent'
    
    
        p_name.innerText ='NAME  :  ' + elem.name
        p_salary.innerText = 'SALARY : ' +  elem.salary
        p_user.innerText = ' USER NAME : ' + elem.user_name
        div_elem.className = 'div_elem'
      
        div_textContent.append(p_name,p_salary,p_user)
      
      
        div_elem.append( div_textContent)
        div_all_elements.append(images,div_elem)
        div_root.append(div_all_elements)
      
    
    
      if(i === 1){
        p_name.innerText ='NAME  :  ' + 'Neena'
        p_salary.innerText = 'SALARY : '  + 10000;
        p_user.innerText = ' USER NAME : ' + 2
    
        images.src = 'https://i.ibb.co/yYxK3cq/2.png'
       
      }
      if(i ===2){
        p_name.innerText ='NAME  :  ' + 'John'
        p_salary.innerText = 'SALARY : ' + 4500;
        p_user.innerText = ' USER NAME : ' + 3
        images.src = 'https://i.ibb.co/SNqFDbB/3.png'
      }
      if(i ===3){
        p_name.innerText ='NAME  :  ' + 'Rogers'
        p_salary.innerText = 'SALARY : ' + 3400;
        p_user.innerText = ' USER NAME : ' + 4
        images.src = 'https://i.ibb.co/WnG0fVZ/4.png'
      }
      if(i ===4){
        p_name.innerText ='NAME  :  ' + 'Cevin'
        p_salary.innerText = 'SALARY : ' + 500;
        p_user.innerText = ' USER NAME : ' + 5
        images.src = 'https://i.ibb.co/vdQK54J/6.png'
      }
      if(i ===5){
        p_name.innerText ='NAME  :  ' + 'Alshey'
        p_salary.innerText = 'SALARY : ' + 1210
        p_user.innerText = ' USER NAME : ' + 6
        images.src = 'https://i.ibb.co/wSJN6db/5.png'
      }
       
      }
    }
    
    