//Land selectors
const land = document.querySelector('.landTypeContainer');
const button = document.getElementById('mainButton');

//Family member selectors
const familyMembersContainer = document.querySelector('.mainFamilyContainer');
const familyMembersButton = document.getElementById('familyMembersButton');
const familyMembersGenre = document.querySelector('.familyMemberGenre');
const familyMembersAge = document.getElementById('familyMemberAge');
const totalPrice = document.querySelector('.rightSide');

//Create another bill
const mainBillsContainer = document.querySelector('.amountContainer');

//Family members button
familyMembersButton.addEventListener('click', addFamilyMembers);

//Total price button
button.addEventListener('click', ()=>{
    let squareMeters = document.getElementById('squareMetersInput').value;
    familyGenre();
    addMoreBills(squareMeters);
});

function addFamilyMembers(){
    
    let artcileTest = document.createElement("article") //Documentación
    artcileTest.innerHTML = `
        <select class="familyMemberGenre" name="FamilySelect">
            <option value="Masculino" selected>Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        <input type="number" placeholder="Ingrese la edad del nuevo miembro"> 
    `   
    familyMembersContainer.appendChild(artcileTest); //Documentación
}

function familyGenre (){
    let familyGymFinalPrice = 0;
    if(familyMembersGenre[familyMembersGenre.selectedIndex].textContent === "Masculino"){
        
    }else{
        console.log("Femenino");
    }
}

function addMoreBills(squareMetersParams) {
    const amountCointainerLeftSide = document.createElement("section");
    const amountCointainerRightSide = document.createElement("section");

    if (land.options[land.selectedIndex].textContent === "Apartamento") {
        let totalAdminApartmentPrice = (squareMetersParams*1500) + 50000;
        let totalCleaningApartmentPrice = (((squareMetersParams*1500) + 50000)*0.10) + 
            (squareMetersParams*1000)
        amountCointainerLeftSide.innerHTML += `
        <article class="leftSide">
            <h5>Señores apartamento #</h5>
            <small>Valor administración</small>
            <small>Valor cuota de aseo</small>
            <small>Derechos de gimnasio</small>
            <h5>Total a pagar</h5>
         </article>
        `    
        amountCointainerRightSide.innerHTML += `
            <article class="rightSide">
                <h5>Cuota mes de</h5>
                <class class="smallContainer">
                    <small id="administrationValueAmountParaph">${totalAdminApartmentPrice}</small>
                    <small id="cleaningValueParaph">${totalCleaningApartmentPrice}</small>
                    <small>$ XXXXX</small>
                </class>
                <h5 id="totalBuildingObligations">${totalAdminApartmentPrice+totalCleaningApartmentPrice}</h5>
            </article>
        `
    }else{
        let totalAdminHousePrice = (squareMetersParams*1500) + 100000;
        let totalCleaningHousePrice = (((squareMetersParams*1500) + 100000)*0.10) + 
            (squareMetersParams*1000)
        amountCointainerLeftSide.innerHTML += `
        <article class="leftSide">
            <h5>Señores apartamento #</h5>
            <small>Valor administración</small>
            <small>Valor cuota de aseo</small>
            <small>Derechos de gimnasio</small>
            <h5>Total a pagar</h5>
         </article>
        `    
        amountCointainerRightSide.innerHTML += `
            <article class="rightSide">
                <h5>Cuota mes de</h5>
                <class class="smallContainer">
                    <small id="administrationValueAmountParaph">${totalAdminHousePrice}</small>
                    <small id="cleaningValueParaph">${totalCleaningHousePrice}</small>
                    <small>$ XXXXX</small>
                </class>
                <h5 id="totalBuildingObligations">${totalAdminHousePrice+totalCleaningHousePrice}</h5>
            </article>
        `
    }
    
    mainBillsContainer.appendChild(amountCointainerLeftSide);
    mainBillsContainer.appendChild(amountCointainerRightSide);
}


