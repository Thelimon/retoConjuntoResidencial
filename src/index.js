//Land selectors
const land = document.querySelector('.landTypeContainer');
const button = document.getElementById('mainButton');

//Family member selectors
const familyMembersContainer = document.querySelector('.mainFamilyContainer');
const familyMembersButton = document.getElementById('familyMembersButton');
const familyMembersGenre = document.querySelector('.familyMemberGenre');

//Create another bill
const mainBillsContainer = document.querySelector('.amountContainer');

//Family members button
familyMembersButton.addEventListener('click', addFamilyMembers);

//It creates all the new elements
button.addEventListener('click', () =>{
    const squareMeters = document.getElementById('squareMetersInput').value;
    const familyMembersAge = document.getElementById('familyMemberAge');
    const testeando = familyGenre(familyMembersAge);
    const gettingFamilyMembers = document.querySelectorAll('.gettingArticleFamily').length;
    addMoreBills(squareMeters, testeando, gettingFamilyMembers);
    console.log(gettingFamilyMembers);
});

function addFamilyMembers(){    
    let artcileTest = document.createElement("article");
    artcileTest.className = "gettingArticleFamily"
    artcileTest.innerHTML = `
        <select class="familyMemberGenre" name="FamilySelect">
            <option value="Masculino" selected>Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        <input type="number" placeholder="Ingrese la edad del nuevo miembro"> 
    `   
    familyMembersContainer.appendChild(artcileTest); 
}


function familyGenre (familyMembersAgeParam){
    let familyGymFinalPrice = 0;
    if(familyMembersGenre[familyMembersGenre.selectedIndex].textContent === "Masculino"){
        if(familyMembersAgeParam.value < 10){
            familyGymFinalPrice = 0;
        }else if(familyMembersAgeParam.value >= 10 && familyMembersAgeParam.value < 20){
            familyGymFinalPrice = 20000;
        }else if(familyMembersAgeParam.value >= 20 && familyMembersAgeParam.value < 40){
            familyGymFinalPrice = 15000;
        }else if(familyMembersAgeParam.value >= 40 && familyMembersAgeParam.value < 60){
            familyGymFinalPrice = 10000;
       }else{
            familyGymFinalPrice = 0;
       }
    }else{
        if(familyMembersAgeParam.value < 10){
            familyGymFinalPrice = 0;
        }else if(familyMembersAgeParam.value >= 10 && familyMembersAgeParam.value < 20){
            familyGymFinalPrice = 15000;
        }else if(familyMembersAgeParam.value >= 20 && familyMembersAgeParam.value < 40){
            familyGymFinalPrice = 12000;
        }else if(familyMembersAgeParam.value >= 40 && familyMembersAgeParam.value < 60){
            familyGymFinalPrice = 8000;
       }else{
            familyGymFinalPrice = 0;
       }
    }
    return familyGymFinalPrice;
}

function addMoreBills(squareMetersParams, gymCount, gettingFamilyMembers) {

    //Grid bill section
    const amountCointainerLeftSide = document.createElement("section");
    const amountCointainerRightSide = document.createElement("section");

    //Apartments && houses variables
    let totalAdminApartmentPrice = (squareMetersParams*1500) + 50000;
    let totalCleaningApartmentPrice = (((squareMetersParams*1500) + 50000)*0.10) + (squareMetersParams*1000);
    let totalGymMembers = gymCount * gettingFamilyMembers;
    let totalAdminHousePrice = (squareMetersParams*1500) + 100000;
    let totalCleaningHousePrice = (((squareMetersParams*1500) + 100000)*0.10) + (squareMetersParams*1000);

    //Price to pay
    let apartmentPriceToPay = totalAdminApartmentPrice + totalCleaningApartmentPrice + totalGymMembers;
    let housePriceToPay = totalAdminHousePrice+totalCleaningHousePrice + totalGymMembers;

    if (land.options[land.selectedIndex].textContent === "Apartamento") {

        amountCointainerLeftSide.innerHTML += `
        <article class="leftSide">
            <h5>Señores apartamento #${parseInt(Math.random()*100)}</h5>
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
                    <small id="administrationValueAmountParaph">$ ${totalAdminApartmentPrice}</small>
                    <small id="cleaningValueParaph">$ ${totalCleaningApartmentPrice}</small>
                    <small>$ ${totalGymMembers} </small>
                </class>
                <h5 id="totalBuildingObligations">$ ${apartmentPriceToPay}</h5>
            </article>
        `
    }else{
        amountCointainerLeftSide.innerHTML += `
            <article class="leftSide">
                <h5>Señores casa #${parseInt(Math.random()*(2000 - 1000))}</h5>
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
                    <small id="administrationValueAmountParaph">$ ${totalAdminHousePrice}</small>
                    <small id="cleaningValueParaph">$ ${totalCleaningHousePrice}</small>
                    <small>$ ${totalGymMembers} </small>
                </class>
                <h5 id="totalBuildingObligations">$ ${housePriceToPay}</h5>
            </article>
        `
    }
    mainBillsContainer.appendChild(amountCointainerLeftSide);
    mainBillsContainer.appendChild(amountCointainerRightSide);
}


