// Make asynchronous request to fetch repositories
document.getElementById('fetchRepositories').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var perPage = document.getElementById('per_page').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/repositories', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('repositories').innerHTML = xhr.responseText;
        }
    };
    xhr.send('username=' + username + '&per_page=' + perPage);
});
