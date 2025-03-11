import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Container principal - ocupa toda a tela e centraliza o conteúdo
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Título "Login no Sistema" - define tamanho, peso e cor
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blueviolet',
        margin: 10,
    },
    // Estilo dos campos de input (email e senha) - define bordas e dimensões
    formInput: {
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
    },
    // Botão principal de login - define cor de fundo e dimensões
    formButton: {
        backgroundColor: 'blueviolet',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    // Texto do botão de login - define cor e peso da fonte
    formButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // Container dos botões secundários - organiza os botões em linha
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    // Estilo dos botões secundários (Esqueci senha e Novo usuário)
    subButton: {
        padding: 10,
    },
    // Texto dos botões secundários - define cor
    subTextButton: {
        color: 'blueviolet',
    },
});
