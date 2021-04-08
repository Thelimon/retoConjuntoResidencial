//Land selectors
const land = document.querySelector('.landTypeContainer');
const button = document.getElementById('mainButton');

//Family member selectors
const familyMembersContainer = document.querySelector('.mainFamilyContainer');
const familyMembersButton = document.getElementById('familyMembersButton');
const familyMembersGenre = document.querySelector('.familyMemberGenre');
const familyMembersAge = document.getElementById('familyMemberAge').value;
const totalPrice = document.querySelector('.rightSide');

//Create another bill
const mainBillsContainer = document.querySelector('.amountContainer');

//Family members button
familyMembersButton.addEventListener('click', addFamilyMembers);

//Total price button
button.addEventListener('click', ()=>{
    let squareMeters = document.getElementById('squareMetersInput').value;
    calculateAdminAmount(squareMeters);
    calculateCleaningAmout(squareMeters);
    addMoreBills();
});

function addFamilyMembers(){
    let totalMembers;
    
    let artcileTest = document.createElement("article") //Documentación
    artcileTest.innerHTML = `
        <select class="familyMemberGenre" name="FamilySelect">
            <option value="Masculino" selected>Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        <input type="number" placeholder="Ingrese la edad del nuevo miembro"> 
    `   
    familyMembersContainer.appendChild(artcileTest); //Documentación

    totalMembers++;
}

function calculateAdminAmount(squareMetersParam) {
    const totalAdminAmountCounter = document.getElementById('administrationValueAmountParaph');
    if(land.options[land.selectedIndex].textContent === "Apartamento"){
        `${totalAdminAmountCounter.innerHTML = (squareMetersParam*1500) + 50000}`
    }else{
        `${totalAdminAmountCounter.innerHTML = (squareMetersParam*1500) + 100000}`
    }
}


function calculateCleaningAmout(squareMetersParam) {
    const cleaningAmountCounter = document.getElementById('cleaningValueParaph')
    if(land.options[land.selectedIndex].textContent === "Apartamento"){
        `${cleaningAmountCounter.innerHTML = (((squareMetersParam*1500) + 50000)*0.10) + 
                (squareMetersParam*1000) }`
    }else{
        `${cleaningAmountCounter.innerHTML = (((squareMetersParam*1500) + 100000)*0.10) + 
            (squareMetersParam*1000) }`
    }   
}

function familyGenre (){
    if(familyMembersGenre[familyMembersGenre.selectedIndex].textContent === "Masculino"){

    }else{

    }
}

function priceToPay(){
    const totalBuildingObligationPrice = document.getElementById('totalBuildingObligations');
    `${totalBuildingObligationPrice.innerHTML = ``}`    
}

function addMoreBills() {
    const amountCointainerLeftSide = document.createElement("section");
    const amountCointainerRightSide = document.createElement("section");
    amountCointainerLeftSide.innerHTML = `
        <article class="leftSide">
            <h5>Señores apartamento #</h5>
            <small>Valor administración</small>
            <small>Valor cuota de aseo</small>
            <small>Derechos de gimnasio</small>
            <h5>Total a pagar</h5>
        </article>
    `
    amountCointainerRightSide.innerHTML = `
            <article class="rightSide">
                <h5>Cuota mes de</h5>
                <class class="smallContainer">
                    <small id="administrationValueAmountParaph">$ XXXXX</small>
                    <small id="cleaningValueParaph">$ XXXXX</small>
                    <small>$ XXXXX</small>
                </class>
                <h5 id="totalBuildingObligations">$ XXXXX</h5>
            </article>
    `
    mainBillsContainer.appendChild(amountCointainerLeftSide);
    mainBillsContainer.appendChild(amountCointainerRightSide);
}


