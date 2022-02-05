var imgUrl = document.querySelector('#imgUrl');
var firstNameInput = document.querySelector('#firstName');
var lastNameInput = document.querySelector('#lastName');
var emailInput = document.querySelector('#email');
var save = document.querySelector('#save');
var section = document.querySelector('#section');
var github = document.querySelector('#githubitUrl');
var instagram = document.querySelector('#instagramUrl');
var linkedin = document.querySelector('#LinkedinUrl'); 
var input = document.querySelectorAll('input');
save.addEventListener('click', function(){

  var img = imgUrl.value;
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var githubLink = github.value;
  var instagramLink = instagram.value;
  var linkedinLink = linkedin.value;
  section.innerHTML += `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${img}" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">${firstName} ${lastName}</h5>
                          <p class="card-text">${email}</p>
                          <a href="${githubLink}" class="btn btn-dark col-md-12">GO to Github</a>
                          <a href="${linkedinLink}" class="btn btn-primary col-md-12">GO to Linkedin</a>
                          <a href="${instagramLink}" class="btn btn-success col-md-12">Go to Instagram</a>
                        </div>
                      </div>`;
  
  input.forEach(item => {
    item.value = " ";
  });
});

console.log('creater : NCH')



