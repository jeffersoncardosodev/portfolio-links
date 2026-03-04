const bg = document.getElementById("codeBackground");

// Array com linhas de código Java reais e coloridas (HTML)
const javaLines = [
  '<span style="color: #cc7832">public class</span> <span style="color: #ffc66d">Main</span> {',
  '    <span style="color: #cc7832">public static void</span> <span style="color: #ffc66d">main</span>(String[] args) {',
  '        <span style="color: #9876aa">List</span>&lt;String&gt; tech = <span style="color: #cc7832">new</span> <span style="color: #9876aa">ArrayList</span>&lt;&gt;();',
  '        tech.<span style="color: #ffc66d">add</span>(<span style="color: #6a8759">"Java Spring Boot"</span>);',
  '        <span style="color: #9876aa">System</span>.out.<span style="color: #ffc66d">println</span>(<span style="color: #6a8759">"Jefferson Dev Backend..."</span>);',
  '        <span style="color: #bbb">@RestController</span>',
  '        <span style="color: #cc7832">private final</span> <span style="color: #9876aa">UserRepository</span> repository;',
  '        <span style="color: #bbb">@GetMapping</span>(<span style="color: #6a8759">"/api/v1/links"</span>)',
  '        <span style="color: #cc7832">return</span> ResponseEntity.<span style="color: #ffc66d">ok</span>(user);',
  "    }",
  "}",
];

function addLine() {
  const line = document.createElement("div");
  // Sorteia uma linha do array
  line.innerHTML = javaLines[Math.floor(Math.random() * javaLines.length)];
  line.style.opacity = "0.4";
  line.style.whiteSpace = "nowrap";

  bg.appendChild(line);

  // Remove a linha mais antiga se houver muitas na tela
  if (bg.childNodes.length > 50) {
    bg.removeChild(bg.childNodes[0]);
  }

  // Garante que o scroll automático fique sempre no final (opcional)
  bg.scrollTop = bg.scrollHeight;
}

// Adiciona uma linha a cada 300ms (ajuste a velocidade aqui)
setInterval(addLine, 400);
