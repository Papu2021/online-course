
//for the tutee profile and tutor profile
const image_input = document.querySelector("#input_image"); 
var uploaded_image= "";
 
            image_input.addEventListener("change", function(){
                const reader= new FileReader();
                reader.addEventListener("load", () => {
                uploaded_image = reader.result;
                document.querySelector("#displayimg").style.backgroundImage= `url(${uploaded_image})`;
                });
             
                reader.readAsDataURL(this.files[0]);
            })

const file_input = document.querySelector("#input_file"); 
var uploaded_file= "";
 
            file_input.addEventListener("change", function(){
                const reader1= new FileReader();
                reader1.addEventListener("load", () => {
                uploaded_file = reader1.result;
                document.querySelector("#displayimg2").style.backgroundAttachment = `url(${uploaded_file})`;
                });
             
                reader1.readAsDataURL(file);
            })
