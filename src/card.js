function generateManager(Manager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${Manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-chalkboard-teacher"></i>Manager</h6>
    <p class="card-text">
        Employee ID: ${Manager.id}
        <br>
        Employee Office Number: ${Manager.office}
    </p>
    <a href="mailto:${Manager.email}" class="card-link">${Manager.email}</a>
  </div>
</div>
    `
}

function generateEngineer(engineer) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-laptop-code"></i></i>Engineer</h6>
    <p class="card-text">
        Employee ID: ${engineer.id}
        <br>
        Employee GitHub Account:<a href="https://github.com/${engineer.github}">${engineer.github}</a>
        <br>
        Email:<a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
    </p>
  </div>
</div>
    `
}

function generateIntern(intern) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-graduation-cap"></i>Intern</h6>
    <p class="card-text">
        Employee ID: ${intern.id}
        <br>
        School Attending: ${intern.school}
    </p>
    <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
  </div>
</div>
    `
}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern
};