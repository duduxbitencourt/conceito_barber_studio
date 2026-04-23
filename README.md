<div align="center">

# Conceito Barber Studio

Landing page institucional para divulgação de serviços, portfólio e agendamentos de uma barbearia local.  
Foco em experiência de usuário otimizada, design moderno e alta performance de carregamento.

</div>

---

## Especificações Técnicas

Construído com **Vanilla Stack** — sem frameworks, com controle total sobre o DOM e a estilização.

| Camada | Tecnologia |
|:---|:---|
| Marcação | HTML5 semântico |
| Estilização | CSS3 com arquitetura Mobile First |
| Comportamento | JavaScript ES6+ (módulos nativos) |
| Geolocalização | Google Maps Platform API |
| Assets | Gerenciamento local de imagens (portfólio) |

---

## Identidade Visual

Paleta industrial e sofisticada — tons neutros com contrastes acentuados.

| Cor | Hex | Aplicação |
|:---|:---|:---|
| Primary Black | `#000000` | Backgrounds e tipografia principal |
| Stone Gray | `#A69F95` | Elementos de destaque e bordas |
| Neutral Gray | `#7A7A7A` | Textos secundários e ícones |
| Pure White | `#FFFFFF` | Contrastes e áreas de leitura |
| Steel Blue | `#606B73` | Detalhes de interface e estados hover |

---

## Estrutura do Projeto

Organização baseada na separação de responsabilidades **(SoC)**:

```text
/
├── assets/
│   ├── img/
│   │   ├── portfolio/     # Fotos dos sócios e trabalhos realizados
│   │   └── qrcode/        # QR Code para agendamento via desktop
│   └── css/
│       └── style.css      # Folha de estilos global com media queries
├── js/
│   └── main.js            # Lógica de integração e comportamento da UI
└── index.html             # Estrutura semântica do documento
```

---

## Como Usar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/conceito-barber-studio.git

# Acesse a pasta
cd conceito-barber-studio

# Abra no navegador
open index.html
```

> Para utilizar a integração com o Google Maps, é necessário configurar uma chave de API válida no arquivo `main.js`.

---

<div align="center">
  <sub>Desenvolvido com foco em performance e experiência do usuário.</sub>
</div>
