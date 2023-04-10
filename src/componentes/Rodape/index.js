import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='Instagram' />
                        </a>
                    </li>
                </ul>             
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Organo' />
            </div>
            <div>
                <h4>Desenvolvido por Lucas</h4>
            </div>
        </footer>
    )
}

export default Rodape