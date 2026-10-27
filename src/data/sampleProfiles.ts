// Realistic sample responses for demonstration and immediate report preview

export interface SampleProfile {
  name: string;
  description: string;
  answers: number[];
}

export const SAMPLE_PROFILE_BALANCED: SampleProfile = {
  name: "Perfil Ilustrativo: O Insistente & O Prestativo",
  description: "Exemplo completo cobrindo todas as faixas (Crítico, Forte, Moderado, Baixo e Dormente).",
  // 45 answers corresponding to the 9 saboteurs:
  // avoider (0..4): [2, 2, 3, 2, 2] -> 11/25 (44% - Dormente)
  // controller (5..9): [3, 4, 3, 4, 3] -> 17/25 (68% - Moderado)
  // hyper-achiever (10..14): [3, 3, 4, 3, 3] -> 16/25 (64% - Moderado)
  // victim (15..19): [2, 2, 2, 2, 2] -> 10/25 (40% - Dormente)
  // hyper-rational (20..24): [3, 2, 3, 2, 3] -> 13/25 (52% - Baixo)
  // hyper-vigilant (25..29): [3, 3, 2, 3, 3] -> 14/25 (56% - Baixo)
  // restless (30..34): [1, 2, 1, 2, 2] -> 8/25 (32% - Dormente)
  // pleaser (35..39): [4, 4, 4, 4, 4] -> 20/25 (80% - Forte Influência)
  // stickler (40..44): [5, 5, 4, 5, 5] -> 24/25 (96% - Crítico / Dominante)
  answers: [
    // O Esquivo (indices 0..4)
    2, 2, 3, 2, 2,
    // O Controlador (indices 5..9)
    3, 4, 3, 4, 3,
    // O Hiper-Realizador (indices 10..14)
    3, 3, 4, 3, 3,
    // A Vítima (indices 15..19)
    2, 2, 2, 2, 2,
    // O Hiper-Racional (indices 20..24)
    3, 2, 3, 2, 3,
    // O Hipervigilante (indices 25..29)
    3, 3, 2, 3, 3,
    // O Inquieto (indices 30..34)
    1, 2, 1, 2, 2,
    // O Prestativo (indices 35..39)
    4, 4, 4, 4, 4,
    // O Insistente (indices 40..44)
    5, 5, 4, 5, 5
  ]
};
