import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './src/styles';
import { useState } from 'react';
//importar da biblioteca firebase
import { auth } from './src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  // Constande que guarda o email e a senha do usuário
  // useState é uma função que retorna um array com dois elementos ele fica escutando o valor da constante e atualiza o valor da constante quando o usuário digita algo no input.
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');

  function userLogin() {
    //alert('Realizando login...');
    //alert(userMail + ' ' + userPass);
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login realizado com sucesso: ' + user.email);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema</Text>
      <TextInput style={styles.formInput}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput style={styles.formInput}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.formButton}
        onPress={userLogin}
      >
        <Text style={styles.formButtonText}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

