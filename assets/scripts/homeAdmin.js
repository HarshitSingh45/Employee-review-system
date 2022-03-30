$("document").ready(function() {
	$("#all-emp").trigger('click');
});


$('#all-emp').click(function(){
    $('#all-emp').css('color', 'green');
    $('#heading').text('All-Employees');
    $.ajax({
        type: 'get',
        url: '/employees/getAll',
        success: function(data){
            let employees = data.data.employees;
            for(let emp of employees){
                let empDOM = createEmpDOM(emp);
                $('#selected-content').append(empDOM);
                deleteEmp($(' .delete-emp', empDOM));
                makeAdmin($(' .make-admin', empDOM));
            }
            
        }
    })
})


function createEmpDOM(emp){
    return $(`<div class="emp" id="emp-${emp._id}">
                <div class="emp-name">${emp.name}</div>
                <div class="emp-actions">
                    
                    <a href="/employees/view/${emp._id}">
                        <button>Update</button>
                    </a>&nbsp;
                    <a class="delete-emp" href="/employees/destroy/${emp._id}">
                        <button>Remove</button>
                    </a>&nbsp;
                    <a class="make-admin" href="/employees/makeAdmin/${emp._id}">
                        <button>Make Admin</button>
                    </a>
                </div>
            </div>`);
}


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
