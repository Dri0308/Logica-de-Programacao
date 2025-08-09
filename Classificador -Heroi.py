nome = "Adriana"
experiencia = 1850

if experiencia <1000:
    print(f"O jogador de nome {nome} alcançou o nível Ferro")
elif 1001 <= experiencia <= 2000:
    print(f"O jogador de nome {nome} alcançou o nível Bronze")
else:
    print(f"O jogador de nome {nome} já tem o que é necessário para a próxima fase")
