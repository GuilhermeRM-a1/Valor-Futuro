import { createCard } from '../modulos/js/createcard.js';

function dinamiqueScroll() {
    
  const containers = document.querySelectorAll('.cards-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const container = entry.target;

      if (entry.isIntersecting) {
        const tipo = container.dataset.id; // identifica o container
        
        // Gera cards específicos por container
        if (container.querySelectorAll('.card').length === 0) {
            
          if (tipo === "principais-produtos") {
            
            createCard(container, "../assets/img/man-with-sales-woman-car-showroom-convertido-de-jpg.webp", "Consórcios", "Para automóveis, imóveis e serviços.");
            createCard(container, "../assets/img/happy-customer-buying-brand-new-car-local-car-dealership-convertido-de-jpg.webp", "Seguros", "A sua blindagem patrimonial com as coberturas certas");
            createCard(container, "../assets/img/Financiamento.webp", "Financiamento", "Taxas imperdíveis e aprovação rápida.");
          }

          if (tipo === "outros-produtos") {
            
            createCard(container, "../assets/img/medium-shot-environmental-engineer-holding-laptop-convertido-de-jpg.webp", "Energia Solar por Assinatura", "Economize ainda mais sua conta de energia sem custo.");
            createCard(container, "../assets/img/male-doctor-showing-xray-pictures-teeth-tablet-convertido-de-jpg.webp", "Plano Dental", "Invista na sua saúde bucal e qualidade de vida.");
          }

        container.classList.add("show");
        }
      } else {
        container.classList.remove("show");
        container.innerHTML = ""; // limpa apenas o container atual
      }
    });
  }, { threshold: 0});

  containers.forEach(container => observer.observe(container));
}

dinamiqueScroll();
