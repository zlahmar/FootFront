import BlocTitre from "../bloc/BlocTitre"
import logo from '../../assets/icon/logo.png'

export default function APropos() {

    return (
        <div className="xl:ml-64 flex flex-col">
            <BlocTitre title="A Propos de nous"/> 
            <div className="w-full h-full bg-gunMetal flex justify-center rounded-3xl overflow-y-auto overflow-hidden mb-3">
                <div className="flex flex-row flex-wrap justify-center w-full ">
                    <div className="text-left px-3">      
                        <div className="text-white p-3 mx-3 mt-3 mb-5 border border-4 border-tiffanyBlue border-double rounded-lg">
                            <span className="text-[25px] p-2 italic font-content">
                            Les visualisations de données sont une méthode puissante pour raconter des histoires en faisant ressortir les motifs, les relations et les tendances dans les données. - Nigel Holmes
                            </span>
                        </div>
                        <div className="px-3">
                            <div className="text-white">
                                <p className="text-[20px] font-content">
                                    &nbsp; Le football est l'un des sports les plus populaires dans le monde. Il possède plusieurs histoires et nombreux rôles, des buts aux passes décisives, en passant par les clean sheets et le nombre de matchs. Les données qui expliquent les tendances des ligues, des clubs et des joueurs sont nombreuses. <br/><br/> &nbsp; Chaque instant, des matchs se jouent et génèrent des données. Toutefois, si ces données sont simplement stockées dans une table, nous ne pourrons pas comprendre le sens qu'elles véhiculent dans leur ensemble.
                                    C'est pourquoi j'ai décidé de créer un site web pour visualiser les statistiques du football. J'ai collecté les données de cinq ligues principales - <strong>Ligue 1, Liga, Bundes Liga, Serie A et  Premier League </strong>- depuis 2002 jusqu'en 2022, soit vingt saisons au total.<br/><br/> &nbsp; Grâce à des sites tels que <a href="https://www.fbref.com" className="underline decoration-solid">https://www.fbref.com</a> et <a href="https://www.uefa.com" className="underline decoration-solid">https://www.uefa.com</a>, je peux maintenant visualiser les données.
                                    Je n'ai pas créé ce site à des fins commerciales, mais plutôt par passion pour le football et la visualisation des données. Ce projet est en constante évolution et je continue à le développer au fur et à mesure.
                                </p>
                            </div>
                            <br/>
                            <div className="text-white">
                                <p className="text-[20px] font-content">
                                &nbsp; Nous sommes une équipe de passionnés de football et de visualisation de données. Nous avons créé ce site pour partager notre passion avec vous. Cependant, la création d'un site n'est pas facile et nous avons eu besoin de l'aide de nos collègues de <strong>EPSI Bordeaux</strong>.

                                <br/><br/>&nbsp;Nous remercions <a href="https://github.com/Gastonpallas"><strong className="text-tiffanyBlue underline decoration-solid">Gaston PALLAS</strong></a> pour avoir développé la première partie du frontend en React et Tailwind. Grâce à son travail, nous sommes sur la bonne voie de développement.

                                <br/><br/>&nbsp;Nous sommes également reconnaissants envers <a href="https://github.com/zlahmar"><strong className="text-tiffanyBlue underline decoration-solid">Zainab LAHMAR</strong></a> qui a effectué des recherches approfondies sur la modélisation des données. Elle a travaillé dur pour trouver les meilleurs moyens de visualiser les données sur la page web.

                                <br/><br/>&nbsp;Enfin, nous n'aurions pas pu déployer ce site sans l'aide de <a href="https://github.com/jul-fls"><strong className="text-tiffanyBlue underline decoration-solid">Julien FLUSIN</strong></a>. De l'intégration continue au serveur de nom de domaine, il nous a énormément aidés et nous sommes très reconnaissants pour son soutien.

                                <br/><br/>&nbsp;Nous sommes fiers de ce que nous avons créé ensemble et espérons que vous apprécierez notre site autant que nous avons apprécié de le créer.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-white px-3 pt-5 mr-auto">
                        <table className="table-fixed border-separate border-spacing-2 border border-tiffanyBlue">
                            <thead>
                                <tr >
                                    <th>Version</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>V0</td>
                                    <td className="text-left">Collecte les données (Initialisation)</td>
                                    <td className="text-right">Le 13 Mars 2023</td>
                                </tr>
                                <tr>
                                    <td>V1</td>
                                    <td className="text-left">Liste ligues, clubs</td>
                                    <td className="text-right">Le 26 Avril 2023</td>
                                </tr>
                                <tr>
                                    <td>V2</td>
                                    <td className="text-left">Liste joueurs, détails de club</td>
                                    <td className="text-right">Le 31 Juillet 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 pb-2 pr-8 flex flex-row-reverse w-full">
                        <a href="https://github.com/Sangmin-SHIM">
                            <p className="text-lg text-tiffanyBlue">
                                Sangmin SHIM 
                                <br/>
                                <span className="text-sm">Développeur Fullstack</span>
                            </p>
                        </a>
                        <img className="w-8 h-8 mr-3 mt-3" src={logo} alt="logo" />
                    </div>
                </div>
            </div>


        </div>
    )
}