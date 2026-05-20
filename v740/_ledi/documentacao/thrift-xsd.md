---
layout: doc
title: Registros Thrift / XSD por ficha
id: thrift-xsd
order: 4
parent: layout_ab
---

## Ficha de Cadastro Individual

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[CadastroIndividual]({% url dicionario-fci#cadastroindividual %})	|CadastroIndividualThrift	| cadastroindividual.xsd |
|[CondicoesDeSaude]({% url dicionario-fci %}#condicoesdesaude)	|CondicoesDeSaudeThrift	| condicoesdesaude.xsd |
|[EmSituacaoDeRua]({% url dicionario-fci %}#emsituacaoderua)	|EmSituacaoDeRuaThrift	| emsituacaoderua.xsd |
|[IdentificacaoUsuarioCidadao]({% url dicionario-fci %}#identificacaousuariocidadao)	|IdentificacaoUsuarioCidadaoThrift	| identificacaousuariocidadao.xsd |
|[InformacoesSocioDemograficas]({% url dicionario-fci %}#informacoessociodemograficas)	|InformacoesSocioDemograficasThrift	| informacoessociodemograficas.xsd |
|[SaidaCidadaoCadastro]({% url dicionario-fci %}#saidacidadaocadastro) | SaidaCidadaoCadastroThrift | saidacidadaocadastro.xsd |

## Ficha de Cadastro Domiciliar

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
| [CadastroDomiciliar]({% url dicionario-fcd %}#cadastrodomiciliar) | CadastroDomiciliarThrift | cadastrodomiciliar.xsd |
| [FamiliaRow]({% url dicionario-fcd %}#familiarow) | FamiliaRowThrift | familiarow.xsd |
| [EnderecoLocalPermanencia]({% url dicionario-fcd %}#enderecolocalpermanencia) | EnderecoLocalPermanenciaThrift | enderecolocalpermanencia.xsd |
| [CondicaoMoradia]({% url dicionario-fcd %}#condicaomoradia) | CondicaoMoradiaThrift | condicaomoradia.xsd |
| [InstituicaoPermanencia]({% url dicionario-fcd %}#instituicaopermanencia) | InstituicaoPermanenciaThrift | instituicaopermanencia.xsd |

## Ficha de Atendimento Individual

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
| [FichaAtendimentoIndividualMaster]({% url dicionario-fai %}#fichaatendimentoindividualmaster) | FichaAtendimentoIndividualMasterThrift | fichaatendimentoindividualmaster.xsd |
| [FichaAtendimentoIndividualChild]({% url dicionario-fai %}#fichaatendimentoindividualchild) | FichaAtendimentoIndividualChildThrift | fichaatendimentoindividualchild.xsd |
| [Exame]({% url dicionario-fai %}#exame) | ExameThrift | exame.xsd |
| [ProblemaCondicao]({% url dicionario-fai %}#problemacondicao) | ProblemaCondicaoAIThrift | problemacondicao.xsd |
| [Medicamentos]({% url dicionario-fai %}#medicamentos) | MedicamentosThrift | medicamentos.xsd |
| [Encaminhamentos]({% url dicionario-fai %}#encaminhamentos) | EncaminhamentosThrift | encaminhamentos.xsd |
| [ResultadosExames]({% url dicionario-fai %}#resultadosexames) | ResultadosExamesThrift | resultadosexames.xsd |

## Ficha de Atendimento Odontológico

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
| [FichaAtendimentoOdontologicoMaster]({% url dicionario-fao %}#fichaatendimentoodontologicomaster) | FichaAtendimentoOdontologicoMasterThrift | fichaatendimentoodontologicomaster.xsd |
| [FichaAtendimentoOdontologicoChild]({% url dicionario-fao %}#fichaatendimentoodontologicochild) | FichaAtendimentoOdontologicoChildThrift | fichaatendimentoodontologicochild.xsd |
| [ProcedimentoQuantidade]({% url dicionario-fao %}#procedimentoquantidade) | ProcedimentoQuantidadeThrift | procedimentoquantidade.xsd |
| [Medicamentos]({% url dicionario-fao %}#medicamentos) | MedicamentosThrift | medicamentos.xsd |
| [Encaminhamentos]({% url dicionario-fao %}#encaminhamentos) | EncaminhamentosThrift | encaminhamentos.xsd |
| [ResultadosExames]({% url dicionario-fao %}#resultadosexames) | ResultadosExamesThrift | resultadosexames.xsd |
| [ProblemaCondicao]({% url dicionario-fai %}#problemacondicao) | ProblemaCondicaoAIThrift | problemacondicao.xsd |

## Ficha de Atividade Coletiva

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
| [FichaAtividadeColetiva]({% url dicionario-fac %}#fichaatividadecoletiva) | FichaAtividadeColetivaThrift | fichaatividadecoletiva.xsd |
| [ParticipanteRowItem]({% url dicionario-fac %}#participanterowitem) | ParticipanteRowItemThrift | participanterowitem.xsd |
| [ProfissionalCboRowItem]({% url dicionario-fac %}#profissionalcborowitem) | ProfissionalCboRowItemThrift | profissionalcborowitem.xsd |

## Ficha de Procedimentos

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaProcedimentoMaster]({% url dicionario-fp %}#fichaprocedimentomaster)	|FichaProcedimentoMasterThrift	| fichaprocedimentomaster.xsd |
|[FichaProcedimentoChild]({% url dicionario-fp %}#fichaprocedimentochild)	|FichaProcedimentoChildThrift	| fichaprocedimentochild.xsd |

## Ficha de Visita Domiciliar

|Dicionário de dados |Thrift |XSD |
|--- |--- |--- |
|[FichaVisitaDomiciliarMaster]({% url dicionario-fvd %}#fichavisitadomiciliarmaster)	|FichaVisitaDomiciliarMasterThrift	| fichavisitadomiciliarmaster.xsd |
|[FichaVisitaDomiciliarChild]({% url dicionario-fvd %}#fichavisitadomiciliarchild)	|FichaVisitaDomiciliarChildThrift	| fichavisitadomiciliarchild.xsd |

## Marcadores de Consumo Alimentar

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaConsumoAlimentar]({% url dicionario-mca %}#fichaconsumoalimentar)	|FichaConsumoAlimentarThrift	| fichaconsumoalimentar.xsd |
|[PerguntaQuestionarioCriancasComMaisDoisAnos]({% url dicionario-mca %}#perguntaquestionariocriancascommaisdoisanos)	|PerguntaQuestionarioCriancasComMaisDoisAnosThrift	| perguntaquestionariocriancascommaisdoisanos.xsd |
|[PerguntaQuestionarioCriancasDeSeisVinteTresMeses]({% url dicionario-mca %}#perguntaquestionariocriancasdeseisvintetresmeses)	|PerguntaQuestionarioCriancasDeSeisVinteTresMesesThrift	| perguntaquestionariocriancasdeseisvintetresmeses.xsd |
|[PerguntaQuestionarioCriancasMenoresSeisMeses]({% url dicionario-mca %}#perguntaquestionariocriancasmenoresseismeses)	|PerguntaQuestionarioCriancasMenoresSeisMesesThrift	| perguntaquestionariocriancasmenoresseismeses.xsd |
|[RespostaMultiplaEscolhaEnum]({% url dicionario-mca %}#respostamultiplaescolhaenum)	|RespostaMultiplaEscolhaEnumThrift	| respostamultiplaescolhaenum.xsd |
|[RespostaUnicaEscolhaEnum]({% url dicionario-mca %}#respostaunicaescolhaenum)	|RespostaUnicaEscolhaEnumThrift	| respostaunicaescolhaenum.xsd |
|[PerguntaCriancasComMaisDoisAnosEnum]({% url dicionario-mca %}#perguntacriancascommaisdoisanosenum)	|PerguntaCriancasComMaisDoisAnosEnumThrift	| perguntacriancascommaisdoisanosenum.xsd |
|[PerguntaCriancasDeSeisVinteTresMesesEnum]({% url dicionario-mca %}#perguntacriancasdeseisvintetresmesesenum)	|PerguntaCriancasDeSeisVinteTresMesesEnumThrift	| perguntacriancasdeseisvintetresmesesenum.xsd |
|[PerguntaCriancasMenoresSeisMesesEnum]({% url dicionario-mca %}#perguntacriancasmenoresseismesesenum)	|PerguntaCriancasMenoresSeisMesesEnumThrift	| perguntacriancasmenoresseismesesenum.xsd |

## Ficha de Avaliação de Elegibilidade

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaAvaliacaoElegibilidade]({% url dicionario-fae %}#fichaavaliacaoelegibilidade)	|FichaAvaliacaoElegibilidadeThrift	| fichaavaliacaoelegibilidade.xsd |
|[EnderecoLocalPermanencia]({% url dicionario-fae %}#enderecolocalpermanencia)	|EnderecoLocalPermanenciaThrift	| enderecolocalpermanencia.xsd |

## Ficha de Atendimento Domiciliar

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaAtendimentoDomiciliarMaster]({% url dicionario-fad %}#fichaatendimentodomiciliarmaster)	|FichaAtendimentoDomiciliarMasterThrift	| fichaatendimentodomiciliarmaster.xsd |
|[FichaAtendimentoDomiciliarChild]({% url dicionario-fad %}#fichaatendimentodomiciliarchild)	|FichaAtendimentoDomiciliarChildThrift	| fichaatendimentodomiciliarchild.xsd |
|[ProblemaCondicao]({% url dicionario-fai %}#problemacondicao) | ProblemaCondicaoAIThrift | problemacondicao.xsd |

## Ficha complementar - Síndrome neurológica por Zika / Microcefalia

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaComplementarZikaMicrocefalia]({% url dicionario-fczm %}#fichacomplementarzikamicrocefalia)|FichaComplementarZikaMicrocefaliaThrift| fichacomplementarzikamicrocefalia.xsd|

## Ficha de Vacinação

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[FichaVacinacaoMaster]({% url dicionario-fv %}#fichavacinacaomaster)	|FichaVacinacaoMasterThrift	| fichavacinacaomaster.xsd |
|[FichaVacinacaochild]({% url dicionario-fv %}#fichavacinacaochild)	|FichaVacinacaoChildThrift	| fichavacinacaochild.xsd |
|[VacinaRowThrift]({% url dicionario-fv %}#vacinarowthrift)	|VacinaRowThrift	| vacinarowthrift.xsd |

## headerTransport

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[UnicaLotacaoHeader]({% url headerTransport %}#unicalotacaoheader)	|UnicaLotacaoHeaderThrift	| unicalotacaoheader.xsd |
|[LotacaoHeader]({% url headerTransport %}#lotacaoheader)	|LotacaoHeaderThrift	| lotacaoheader.xsd |
|[VariasLotacoesHeader]({% url headerTransport %}#variaslotacoesheader)	|VariasLotacoesHeaderThrift	| variaslotacoesheader.xsd |

## Versão

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[Versao]({% url versao %})	|VersaoThrift	| versao.xsd |

## Camada de Transporte

| Dicionário de dados | Thrift | XSD |
| ------------------- | ------ | --- |
|[DadoTransporte]({% url camada-transporte %}#dadotransporte)	|DadoTransporteThrift	| dadotransporte.xsd |
|[DadoInstalacao]({% url camada-transporte %}#dadoinstalacao)	|DadoInstalacaoThrift	| dadoinstalacao.xsd |