document.getElementById("form")?.addEventListener('submit', function (event){
    event.preventDefault(); 

    let nameElement=document.getElementById('name') as HTMLInputElement
    let emailElement=document.getElementById('email') as HTMLInputElement
    let phoneElement=document.getElementById('phone') as HTMLInputElement
    let educationElement=document.getElementById('edu') as HTMLInputElement
    let experienceElement=document.getElementById('experience') as HTMLInputElement
    let skillElement=document.getElementById('skill') as HTMLInputElement

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement ){
        const name= nameElement.value;
        const email= emailElement.value;
        const phone= phoneElement.value;
        const edu= educationElement.value;
        const experience= experienceElement.value;
        const skill= skillElement.value;

    




    // const resumeOutput = `
   
   const resumeOutput =` <h2>Resume</h2>
   <p> <strong> Name: </strong> <span id="editName" class="editable"> ${name}</span></p>   
    <p> <strong> Email: </strong><span id="editEmail" class="editable"> ${email}</span></p>   
    <p> <strong> Phone: </strong><span id="editPhone" class="editable"> ${phone}</span></p>

    <h3> Education </h3>
    <p id="editEducation" class="editable"> ${edu}</p>

    <h3> Experience </h3>
    <p Experience> ${experience}</p>

    <h3> Skill </h3>
    <p id="editSkill" class="editable"> ${skill}</p>
    
    `;

    const resumeOutputElement= document.getElementById('resumeOutput')

    if (resumeOutputElement) {
        resumeOutputElement.innerHTML= resumeOutput  
    
    makeEditable();

    }
        
    
    

    }
})

function makeEditable(){
    const editableElement = document.querySelectorAll('.editable')

    editableElement.forEach(element => {
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement
            const currentValue=currentElement.textContent || "";

            if (currentElement.tagName === "p" || currentElement.tagName=== 'SPAN'){
                const input = document.createElement('input')
                input.value= currentValue
                input.classList.add('editing-input')


                input.addEventListener('blur' , function(){
                       currentElement.textContent= input.value;
                       currentElement.style.display='inline'
                       input.remove() 
                })




                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
                
            }
        })
    })
}