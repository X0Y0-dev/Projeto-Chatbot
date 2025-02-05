import pyttsx3

engine = pyttsx3.init()
ligado = False


def falar(texto):
    global ligado  # Garante que estamos usando a variável global
    if ligado:  # Verifica diretamente a variável global
        engine.say(texto)
        engine.runAndWait()


while True:
    print("Ativar Text To Speech?")
    ttx = input("SIM ou NÃO\n").strip().lower()
    if ttx == "sim":
        ligado = True
        break
    elif ttx == "não" or ttx == "nao":
        ligado = False
        break
    else:
        print("Digite sim ou não")

print("Olá! Eu sou o SuporteBot!\n")
falar("Olá! Eu sou o SuporteBot!\n")
print("Caso queira sair do chat, digite 'Sair'\n")
falar("Caso queira sair do chat, digite 'Sair'")
print("Para ver as dúvidas frequentes, digite 'dúvidas'\n")
falar("Para ver dúvidas frequentes, digite 'dúvidas'")

# Enquanto não der break, o bot continuará falando
while True:
    pergunta = input("Você: ").strip().lower()  # Transforma em minúsculo e remove espaços

    if pergunta in ("ola", "olá", "oi", "oii", "oie", "eai", "e aí", "opa", "fala", "fala aí", "salve", "bom dia", "boa tarde", "boa noite", "eae"):
        print("Olá! Existe alguma dúvida em que eu possa ajudar? :D\n")
        falar("Olá! Existe alguma dúvida em que eu possa ajudar? :D")
        
    elif pergunta in ("ate", "tchau", "tchaau", "tchauzinho", "xau", "xauu", "adeus", "até mais", "até logo", "até breve", "falou", "flw", "fui", "valeu", "vlw", "até amanhã", "até depois", "nos vemos", "sair"):
        print("Chatbot: Até mais!") 
        falar("Até mais!")
        break  # Interrompe o chatbot se dizer adeus

    elif pergunta == "suporte":
        print("Deseja falar com um atendente?\n")
        falar("Deseja falar com um atendente?")

        while True:
            resposta = input("Você: ").strip().lower()
            if resposta == "sim":
                print("Chamando Ajuda Profissional... Aguarde\n")
                falar("Chamando Ajuda Profissional... Aguarde")  # Chatbot confirma chamada de ajuda profissional
                break

            elif resposta == "não":
                print("Cancelando.../n")
                falar("Cancelando...")
                print("Para ver as dúvidas frequentes digite Duvidas\n")
                falar("Para ver as dúvidas frequentes digite Duvidas")
                break  # Interrompe a chamada de ajuda se disser não

    elif pergunta == "duvidas" or pergunta == "dúvidas" or pergunta == "duvida" or pergunta == "dúvida":
        print("Aqui estão algumas dúvidas frequentes: ...") 
        falar("Aqui estão algumas dúvidas frequentes: ...")

    elif pergunta == "thanos?":  # Easter egg >:D
        print("Chatbot: Thanos? Eu sou o Thanos, o Deus da Morte!\n")
        falar("Thanos? Eu sou o Thanos, o Deus da Morte!")

    else:  # Caso digite algo desconhecido
        print("Chatbot: Desculpe, não entendi.\n")
        falar("Desculpe, não entendi.")
        print("Caso queira sair do chat, apenas digite 'Sair'\n")
        falar("Caso queira sair do chat, apenas digite 'Sair'")
        print("Para ver as dúvidas frequentes, digite 'Duvidas'\n")
        falar("Para ver dúvidas frequentes, digite 'Duvidas'")
