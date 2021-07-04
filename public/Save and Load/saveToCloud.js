var loaded = false;



function loadProject(prjoectId){
// currently unused
    loaded = true;
}




function loadFirestoredProject(projectRef){
    projectRef.get().then(function(data){
        console.log(data.data().json)
        generateObjects(JSON.parse(data.data().json))
    })
}

function saveProjectToCloud(){
    console.log('saving to cloud')
    function updateMap(){
        savedMaps.doc(projectId).set({
            uid:auth.currentUser.uid,
            json:infodump.value,
            lastSavedAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }



    function creatMapSave(){
        savedMaps.doc(projectId).set({
            uid:auth.currentUser.uid,
            json:infodump.value,
            lastSavedAt: firebase.firestore.FieldValue.serverTimestamp(),
            timeCreated:firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    loaded ? updateMap() : creatMapSave();
    loaded = true;
}



function getMyMaps(){
    return savedMaps.where("uid", "==", auth.currentUser.uid).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            buildMapSave(doc);
        });
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

function buildMapSave(doc){
    let map = new Image();
    map.src="/images/map.png";
    styleToolImage(map);
    map.addEventListener('click',() => {
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawnScreenShapes.forEach(deleteDrawnShape);
        projectId = doc.id;
        let mapJSON = doc.data().json
        generateObjects(JSON.parse(mapJSON));
        loaded=true;
    })
    storedImages.appendChild(map)
}

loadfilestab = document.getElementById('LoadFile');
loadfilestab.addEventListener('click',function (){
    storedImages.innerHTML = 'brb with your saves...';
    getMyMaps()
})