$.ajax({
 url: 'https://api.github.com/users/neiheiselmax',
 success: function(userName) {
       
       		$('.meleft').attr("src", userName.avatar_url);
       		$('.me').attr("src", userName.avatar_url);
       		$('.followers').html(userName.followers);
       		$('.following').html(userName.following);
               

             	 }
     
});

$.ajax({
 url: 'https://api.github.com/users/neiheiselmax/repos',
 success: function(data) {
 
   data.forEach(function(repo){
       
          $('#repos').append( `

                <div class=rrow>
                <div class="col-md-10">
                <h2 id="repoName">${repo.name}</h2>
                </div>
                <div class="rightDivide col-md-2">
                <h3 id="repoLanguages">${repo.language}</h3>
                <img id="star" src="octicons-5.0.1/lib/svg/star.svg">
                <h3 id="repoLanguagez">${repo.stargazers_count}</h3>
                <img id="star" src="octicons-5.0.1/lib/svg/git-branch.svg">
                <h3 id="repoLanguage">${repo.forks_count}</h3>
                </div>
                </div>

                `);
        })
     }
});

$.ajax({
 url: 'https://api.github.com/users/neiheiselmax/events',
 success: function(data) {
 
   data.forEach(function(activity){
       
          $('#activityTab').append( `

                <div class=rrow>
                <div class="col-md-1 commitHolder">
                <img id="commit" src="octicons-5.0.1/lib/svg/git-commit.svg">
                </div>
                <div class="col-md-10 commitText">
                <h3 id="push">${activity.actor.login} pushed to ${activity.repo.name}</h3>
                <img id="meFirstImg" src="${activity.actor.avatar_url}">
                <img id="meSecondImg" src="${activity.actor.avatar_url}">
                <h3 id="pushId">${activity.payload.push_id} ${activity.payload.commits.message}</h3>
                </div>
                </div>

                `);
        })
     }
});




$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
