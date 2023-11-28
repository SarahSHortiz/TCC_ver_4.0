import "../AlterarSenha/AlterarSenha.css"
import { Link } from "react-router-dom"

export default function AlterarSenha() {
    return (
        <div className="body-alterar-senha">
            <div className="alterar-senha-container">
                <div className="title-alterar-senha">
                    <h1>Alterar Senha</h1>
                </div>

                <form className="alterar-senha-form ">
                    <input type="password" id="password" name="password" placeholder="Senha Atual" />
                    <input type="password" id="password" name="password" placeholder="Nova Senha" />
                    <input type="password" id="password" name="password" placeholder="Confimar Senha" />
                </form>
                <div className="alterar-senha-bnt">
                    <div className="bnt-alterar-senha">
                        <button>SALVAR</button>
                    </div>
                    <div className="bnt-voltar-alterar-senha">
                    <Link to='/home'><button>VOLTAR</button></Link>
                    </div>
                </div>
            </div >
        </div >
    )
}