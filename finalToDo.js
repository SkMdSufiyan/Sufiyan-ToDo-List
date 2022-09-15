let x=document.querySelector('#add_but');
let input=document.querySelector('#input-text-field');
input.style.border='none';
input.setAttribute('placeholder',"What's your plan?")
x.addEventListener('click',function(){
    let input_value = input.value;
    let posts_parent_div = document.getElementById('posts');
    let completed_tasks_div = document.getElementById('tasks-completed');
    if(input_value==''){
        alert('Please fill out the input field');
    }
    else if(input_value!=''){
        var check_box = document.createElement('input');
        check_box.classList.add('check_box_class');
        check_box.setAttribute('type','checkbox')

        var posts_child_div = document.createElement('div');
        posts_child_div.classList.add('posts_child_div');

        var posts_content_div = document.createElement('input');
        posts_content_div.classList.add('posts-content-div');
        posts_content_div.disabled='true';


        var update_but = document.createElement('button');
        update_but.classList.add('update-but');
        update_but.innerHTML='Update';
        update_but.style.display='none';
        
        var edit_but = document.createElement('button');
        edit_but.classList.add('edit-but')
        edit_but.innerHTML = 'Edit';

        var delete_but = document.createElement('button');
        delete_but.classList.add('delete-but');
        delete_but.innerHTML = 'Delete';

        posts_content_div.value = input_value;

        
        var posts_child_div_1 = document.createElement('div');
        posts_child_div_1.classList.add('posts-child-div-1')
        var posts_child_div_2 = document.createElement('div');
        posts_child_div_2.classList.add('posts-child-div-2')

        
        posts_child_div_2.append(update_but);
        posts_child_div_2.append(edit_but);
        posts_child_div_2.append(delete_but);
        posts_child_div.append(check_box);
        posts_child_div.append(posts_content_div);
        posts_child_div.append(posts_child_div_2);
        posts_parent_div.append(posts_child_div);
        input.value='';
    }

    edit_but.addEventListener('click',function(ed){
        var target_edBut = ed.target;
        target_edBut.style.display='none';
        input.disabled='true';
        x.style.display='none';
       
        target_edBut.parentElement.previousElementSibling.disabled='';
       

        update_but.style.display='';
        
        update_but.addEventListener('click',function(eupd){
            let target_updateBut = eupd.target;

            let edit_content = target_edBut.parentElement.previousElementSibling.value;
            if(edit_content!=''){
                target_updateBut.parentElement.previousElementSibling.disabled='true';
                update_but.style.display='none';
                target_edBut.style.display = '';
                input.disabled='';
                x.style.display='';
                
            }else if(edit_content==''){alert('Content field can not be empty')}
        })

    })

    delete_but.addEventListener('click',function(e){
        let target_delBut = e.target;

        target_delBut.parentElement.parentElement.remove();

    })

    check_box.addEventListener('click',function(e){
        check_e = e.target;
        if(check_e.checked){
            completed_tasks_div.append(check_e.parentElement);
            let updateEditDeletebut = check_e.nextElementSibling.nextElementSibling.children;
            updateEditDeletebut[0].style.display='none';
            updateEditDeletebut[1].style.display='none';
            updateEditDeletebut[2].style.display=''; // delete button

        }else if(!check_e.checked){
            posts_parent_div.append(check_e.parentElement);
            let updateEditDeletebut = check_e.nextElementSibling.nextElementSibling.children;
            updateEditDeletebut[0].style.display='none'; // update button
            updateEditDeletebut[1].style.display='';
            updateEditDeletebut[2].style.display='';
        }
       

    })

})


