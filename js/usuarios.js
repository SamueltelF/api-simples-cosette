async function carregarStats() {
  try {
    const response = await fetch("https://cosette.uno/api/usuario/client/stats");
    const data = await response.json();

    if (data.sucesso) {
      document.getElementById("totalUsers").textContent = data.total_usuarios;
      document.getElementById("androidCount").textContent = data.sistemas.android;
      document.getElementById("androidPercent").textContent = data.porcentagens.android;
      document.getElementById("iphoneCount").textContent = data.sistemas.iphone;
      document.getElementById("iphonePercent").textContent = data.porcentagens.iphone;
      document.getElementById("webCount").textContent = data.sistemas.web;
      document.getElementById("webPercent").textContent = data.porcentagens.web;
      document.getElementById("semSistemaCount").textContent = data.sistemas.sem_sistema;
      document.getElementById("semSistemaPercent").textContent = data.porcentagens.sem_sistema;
    }
  } catch (error) {
    console.error("Erro ao carregar estatísticas:", error);
    document.getElementById("totalUsers").textContent = "Erro ao carregar";
  }
}

