$(document).ready(function () {
    $('.deleteUser').on('click', deleteUser)
    $('.updateStudent').on('click', getStudent)
})

function deleteUser () {
    var confirmation = confirm('Are You Sure?')

    if (confirmation) {
        $.ajax({
            type: 'DELETE',
            url: '/students/delete/' + $(this).data('id')
        }).done(function (response) {
            window.location.replace('/')
        })
        window.location.replace('/')
    } else {
        return false;
    }
}

function getStudent () {
    window.location.replace('/students/update/' + $(this).data('id'))
}