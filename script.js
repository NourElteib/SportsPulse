const apiKey = 'd98a6b2dbbe61f01cac9c684fa4fc7cbf13d0b2e0f2ea06005b5b2697dc99c35';
const met = 'Standings';

fetch(`https://apiv2.allsportsapi.com/football/?&met=${met}&leagueId=152&APIkey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const standings = data.result.total;
        const leagueSeason = standings[0].league_season;
        const season = document.getElementById("season");
        season.innerHTML = `${leagueSeason}`;

        const tbody = document.getElementById("tbody");
        standings.forEach((team, index) => {
            const row = document.createElement("tr")
            if (index === 0) {
                row.classList.add("theFirst");
            }
            row.innerHTML = `
        <td>${team.standing_place}</td>
        <td class="team-logo"><img src="${team.team_logo}" alt="${team.standing_team}"></td>
        <td>${team.standing_team}</td>
        <td>${team.standing_P}</td>
        <td>${team.standing_W}</td>
        <td>${team.standing_D}</td>
        <td>${team.standing_L}</td>
        <td>${team.standing_F}</td>
        <td>${team.standing_A}</td>
        <td>${team.standing_GD}</td>
        <td><span class="points">${team.standing_PTS}</span></td>
      `;
            tbody.appendChild(row);
        });

    })
    .catch(error => console.error(error));
