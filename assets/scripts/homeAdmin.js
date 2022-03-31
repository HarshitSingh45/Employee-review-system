$("document").ready(function() {
    // clicking all-emp button whenever page loads
	$("#all-emp").trigger('click');
});

// on clicking all-emp buttons following actions is performed
$('#all-emp').click(function(){
    $('#all-emp').css('color', 'lightseagreen');
    $('#heading').text('All-Employees');
});
// function to send ajax request to load all the employees details
function loadEmployees(){
    // sending get request
    $.ajax({
        type: 'get',
        url: '/employees/getAll',
        success: function(data){
            let employees = data.data.employees;
            for(let emp of employees){
                // creating DOM for each employee
                let empDOM = createEmpDOM(emp);
                // appending it into the list
                $('#selected-content').append(empDOM);
                // activating delete button
                deleteEmp($(' .delete-emp', empDOM));
                // activating makeAdmin button
                makeAdmin($(' .make-admin', empDOM));
            }
            
        }
    })
}
loadEmployees();

// function to create employee DOM
function createEmpDOM(emp){
    return $(`<div class="emp" id="emp-${emp._id}">
                <div class="emp-name">${emp.name}</div>
                <div class="emp-actions">
                    
                    <a href="/employees/view/${emp._id}">
                        <button class="emp-action-button">Update</button>
                    </a>&nbsp;
                    <a class="delete-emp" href="/employees/destroy/${emp._id}">
                        <button class="emp-action-button">Remove</button>
                    </a>&nbsp;
                    <a class="make-admin" href="/employees/makeAdmin/${emp._id}">
                        <button class="emp-action-button">Make Admin</button>
                    </a>
                </div>
            </div>`);
}

// deleting employee through ajax
let deleteEmp = function(deleteLink){
    $(deleteLink).click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'get',
            url: $(deleteLink).prop('href'),
            success: function(data){
                $(`#emp-${data.data.empId}`).remove();
            }
        })
    })
}
//  making employee an admin through ajax request
let makeAdmin = function(mkadmin){
    $(mkadmin).click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'get',
            url: $(mkadmin).prop('href'),
            success: function(data){
                $(`#emp-${data.data.empId}`).remove();
            }
        })
    })
}
