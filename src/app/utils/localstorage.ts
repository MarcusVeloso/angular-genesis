export class LocalStorageUtils {
    
  public obterUsuario() {
      return JSON.parse(localStorage.getItem('info_user'));
  }

  public limparDadosLocaisUsuario() {
      localStorage.removeItem('info_token');
      localStorage.removeItem('info_user');
  }

  public obterTokenUsuario(): string {
      return localStorage.getItem('info_token');
  }

  public salvarTokenUsuario(token: string) {
      localStorage.setItem('info_token', token);
  }

  public salvarUsuario(user: string) {
      localStorage.setItem('info_user', JSON.stringify(user));
  }

  public salvarDadosLocaisUsuario(response: any) {
    this.salvarTokenUsuario(response.accessToken);
    this.salvarUsuario(response.userToken);
  }
}