

// const uploadPannel = uploadPanel()
// var dropZoneElement;
// var inputElement;

// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//     dropZoneElement = inputElement.closest(".drop-zone");
//     inputElement = inputElement;
  
//     dropZoneElement.addEventListener("click", (e) => {
//       inputElement.click();
//     });
  
//     inputElement.addEventListener("change", (e) => {
//       if (inputElement.files.length) {
//         onFileRecieved(e)
//       }
//     });
  
//     dropZoneElement.addEventListener("dragover", (e) => {
//       e.preventDefault();
//       dropZoneElement.classList.add("drop-zone--over");
//     });
  
//     ["dragleave", "dragend"].forEach((type) => {
//       dropZoneElement.addEventListener(type, (e) => {
//         dropZoneElement.classList.remove("drop-zone--over");
//       });
//     });
  
//     dropZoneElement.addEventListener("drop", (e) => {
//       e.preventDefault();
  
//       if (e.dataTransfer.files.length) {
//         onFileDrop(e)
//       }
  
//       dropZoneElement.classList.remove("drop-zone--over");
//     });
//   });
  

//   document.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     if(dropZoneElement.parentNode !== document.body){
//         document.body.appendChild(uploadPannel);
//     }
    
//   });

//   ['dragleave', "dragend", 'drop'].forEach((type) => {
//     uploadPannel.addEventListener(type, (e) => {
//       uploadPannel.remove()
//     });
//   });

//     // uploadPannel.addEventListener('dragleave', function(){
//     //     uploadPannel.remove()
//     // })