grafo = {}
conteudos = []


def adicionar_conteudo(nome, prereqs):
    if nome not in grafo:
        grafo[nome] = []
        conteudos.append(nome)

    for p in prereqs:
            grafo[nome].append(p)

def lista_conteudos():
    print("\n==== lista todos conteudos ====")
    lista_temp = conteudos[:]
    lista_temp.sort()

    for c in lista_temp:
        print("-", c)
    print()


def trilha(conteudo):
    if conteudo not in grafo:
        print("\nEsse conteúdo não existe.")
        return

    visitados = []

    def dfs(no):
        for req in grafo[no]:
            if req not in visitados:
                dfs(req)

        if no not in visitados:
            visitados.append(no)

    dfs(conteudo)

    print("\n==== trilha ====")
    texto = ""
    for item in visitados:
        if texto == "":
            texto = item
        else:
            texto = texto + " -> " + item

    print(texto)
    print()


def carregar_trilha(nome):
    try:
        f = open(nome, "r")
    except:
        print("Arquivo inexistente!\n")
        return

    grafo.clear()
    conteudos.clear()

    for linha in f:
        linha = linha.strip()
        if linha == "":
            continue

        partes = linha.split(":")
        nome_c = partes[0].strip()
        prereqs = []

        if len(partes) > 1 and partes[1] != "":
            lista = partes[1].split(",")
            for p in lista:
                p = p.strip()
                if p != "":
                    prereqs.append(p)

        adicionar_conteudo(nome_c, prereqs)

    f.close()
    print("Trilha carregada!\n")


def escolher_trilha():
    nome = input("Arquivo: ").strip()
    return nome


def menu():
    while True:
        print("===============================")
        print("1 - Ver trilha")
        print("2 - Listar conteúdos")
        print("3 - Trocar trilha")
        print("4 - Sair")
        print("===============================")

        op = input("Opção: ")

        if op == "1":
            alvo = input("Conteúd: ").strip()
            trilha(alvo)

        elif op == "2":
            lista_conteudos()

        elif op == "3":
            arquivo = escolher_trilha()
            carregar_trilha(arquivo)

        elif op == "4":
            break

        else:
            print("Opção inválida!\n")


arquivo_inicial = escolher_trilha()
carregar_trilha(arquivo_inicial)
menu()

