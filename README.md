Ciclo de atualização de dados do component

1. Criar uma nova versão do componente
2. Comparar com a versão anterior
3. Atualizar o que alterou

Memo
1. Pure Functional Components
2. Components com muitas renderizações
3. Muitas renderizações com o mesmo props
4. Components muito grande.

- Exemplo: ProductItem.tsx


useMemo 
1. Cálculos pesados
2. Igualdade referencial (quando a gente repassa a informação para outro components.)

- Exemplo: SearchResult.tsx


useCallback
1. Igualdade referencial  (quando a gente repassa a informação para outro components.)
- Exemplo: index.tsx

Formatação de dados / Cálculos
1. Na maioria das vezes fazer no momento em qu está trazendo os dados.
- Exemplo: index.tsx

Dynamic import (Code Spltting)
Faz a importação somente no momento que precisamos.

1. import dynamic from "next/dynamic";
2. import lazy from "react";

- Exemplo: ProductItem.tsx


Virtualização
- Exemplo : SearchResult.tsx