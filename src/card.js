function generateManager(Manager) {
    return `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header text-center">${Manager.name}</div>
<div class="card-body">
  <h5 class="card-title">Manager</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
    `
}

function generateEngineer(engineer) {
    
}

function generateIntern(intern) {

}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern
};