import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import SindoorLegala from "../../../src/assets/pdf/SindoorLegala.pdf";
import tittleimage from "../../assets/Image/tittleimage.png";

class Files extends Component {
  state = {
    showFileInfo: false,
  };
  state = {
    showFileInfo2: false,
  };
  state = {
    showFileInfo3: false,
  };
  state = {
    showFileInfo4: false,
  };
  state = {
    showFileInfo5: false,
  };
  state = {
    showFileInfo6: false,
  };
  pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.save(SindoorLegala.pdf);
  };
  render() {
    const { showFileInfo } = this.state;
    const { showFileInfo2 } = this.state;
    const { showFileInfo3 } = this.state;
    const { showFileInfo4 } = this.state;
    const { showFileInfo5 } = this.state;
    const { showFileInfo6 } = this.state;

    return (
      <div>
        <div className="card card-body mb-1">
          <div className="tittle filetittle">
            <span className={showFileInfo ? "order-color": "order"}>1</span>
            <div className="justifySpace" >
            <div className="titleHeading" >
            <h4> Conditions générales de réservation</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo: !this.state.showFileInfo })}
                className={this.state.showFileInfo ? " fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
              </div>
          </div>
          {showFileInfo ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div className="subtittle" style={{ width: "100%" }}>
                  <div>
                    <h4>1 — Conditions générales de réservation</h4>
                    <p>
                      Lisez attentivement les présentes Conditions générales de réservation avant de réaliser une transaction par
                      l'intermédiaire de l’Application dans la mesure où ces Conditions générales de réservation s'appliqueront à
                      votre transaction. Nous vous recommandons d'imprimer un exemplaire des présentes Conditions générales de
                      réservation pour les consulter ultérieurement. Si vous n'acceptez pas les présentes Conditions générales de
                      réservation, vous ne pouvez pas utiliser notre Application pour faire une réservation.
                    </p>
                    <h6>1. Définitions</h6>
                    <ul>
                      <li>
                        Par souci de commodité, les termes suivants utilisés dans les présentes Conditions générales de
                        réservation ont les significations suivantes :
                      </li>
                      <li>
                        « <span className="spanText">Application</span> » désigne le logiciel d'application mobile Sindoor
                        disponible au téléchargement sur l’internet mobile ;
                      </li>
                      <li>
                        « <span className="spanText">Client</span> », « <span className="spanText">vous</span> », «{" "}
                        <span className="spanText">votre</span> » et «<span className="spanText">vos</span> » désignent vous,
                        l'acheteur de Produits et Services ;
                      </li>
                      <li>
                        « <span className="spanText">Commande</span> » a le sens qui lui est donné à l'article 3.1 ci-dessous ;
                      </li>
                      <li>
                        « <span className="spanText">Confirmation de commande</span> » a le sens qui lui est donné à l'article 3.3
                        ci- dessous ;
                      </li>
                      <li>
                        « <span className="spanText">Prestataire(s)</span> » désigne nos fournisseurs de produits et services
                        tiers inscrits sur notre Application et qui proposent leurs produits et services à la vente par
                        l'intermédiaire de notre Application ;
                      </li>
                      <li>
                        « <span className="spanText">Contrat Prestataire</span> » a le sens qui lui est donné à l'article 2.3
                        ci-dessous ;
                      </li>
                      <li>
                        « <span className="spanText">Service de paiement</span> » désigne le service de paiement en ligne que vous
                        pouvez utiliser au moment de la réservation ;
                      </li>
                      <li>
                        « <span className="spanText">Services</span> » désigne les produits, marchandises et/ou services d'un
                        Prestataire proposés à l'achat ou à la réservation via notre Application ;
                      </li>
                      <li>
                        « <span className="spanText">Contrat Sindoor</span> » a le sens qui lui est donné à l'article 2.3(a)
                        ci-dessous ;
                      </li>
                      <li>
                        « <span className="spanText">Carte cadeau Sindoor</span> » désigne une carte cadeau émise par Sindoor et
                        qui peut être utilisée sur l'Application pour réduire le prix d'achat de Services conformément à la clause
                        9. Les Cartes cadeaux Sindoor sont disponibles à l'achat pour les montants suivants et uniquement au
                        format électronique : 10 €, 15 €, 20 €, 25 €, 30 €, 50 €, 60 €, 75 € et 100 € ;
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>2. Présentation et relations entre vous, nous et les Prestataires tiers</h6>
                    <ul>
                      <li>
                        Notre Application est exploitée par l’entreprise Sindoor, une société immatriculée en France sous le
                        numéro * * * * * *, dont le siège est situé à Paris et dotée du numéro d'identification TVA * * * * * * («
                        <span className="spanText">Sindoor</span> », « <span className="spanText">nous</span> », «{" "}
                        <span className="spanText">nos</span> » ou « <span className="spanText">notre</span> »).
                      </li>
                      <li>
                        Notre Application vous permet de réserver et de payer une large gamme de Services auprès de divers
                        prestataires (nos Prestataires). Ces Services sont fournis par nos divers Prestataires et non par nous. La
                        fourniture des Services réservés via notre Application est de la responsabilité du Prestataire qui les
                        fournit. Si vous payez les Services via l'Application, votre règlement sera soit versé directement au
                        Prestataire concerné, soit reçu par nous en notre qualité d'agent commercial du Prestataire. Si nous
                        recevons un paiement en qualité d'agent commercial du Prestataire, la réception par nos soins du bon
                        paiement apurera votre dette auprès du Prestataire.
                      </li>
                      <li>
                        Sindoor pourra contacter le Prestataire par email, téléphone, SMS ou Whatsapp en utilisation les
                        informations de contact fournies dans Connect, en relation avec les Réservations ou toute autre question
                        concernant Sindoor et/ou les Services du Prestataire
                      </li>
                      <li>
                        Il en découle d'un point de vue juridique que lorsque vous achetez des Services, deux contrats
                        obligatoires sont créés :
                        <ul>
                          <li>
                            un contrat entre vous et Sindoor (aux termes duquel Sindoor a certaines responsabilités à votre égard
                            concernant l'achat ou la réservation) (le « <span className="spanText">Contrat Sindoor</span> »). Ce
                            contrat est conclu sur la base des présentes Conditions générales de réservation ; et
                          </li>
                          <li>
                            un contrat entre vous et le Prestataire concernant la fourniture des Services que vous réservez par
                            l'intermédiaire de notre Application (le « <span className="spanText">Contrat Prestataire</span> »).
                            Ce contrat peut être soumis aux dispositions des Conditions générales de cette Réservation, y compris
                            la période d’annulation, dont nous vous informerons avant que vous ne fassiez une réservation sur la
                            page du Prestataire sur notre Application.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Tous les Services disponibles à l'achat sur notre Application sont proposés par Sindoor pour le compte de
                        ses Prestataires. C'est à dire que Sindoor prend et conclut vos réservations en qualité d'agent commercial
                        de ses Prestataires. Par conséquent nous ne sommes pas responsables à votre égard des Services réels qui
                        sont réservés par l'intermédiaire de notre Application (y compris des Services achetés en utilisant des
                        Cartes cadeaux Sindoor).
                      </li>
                      <li>
                        Nous pouvons modifier les présentes Conditions générales de réservation de temps à autre comme indiqué
                        dans la clause 10. Chaque fois que vous souhaitez réaliser une Commande sur notre Application, vérifiez
                        les Conditions générales de réservation pour vous assurer que vous comprenez les conditions qui
                        s'appliquent alors.
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>3. Commandes et formation du contrat entre vous et nous </h6>
                    <ul>
                      <li>
                        Vous pouvez passer deux types de commandes (« Commande ») via notre Application : (a) les Commandes de
                        Services et (b) les Commandes de Cartes cadeaux Sindoor.
                      </li>
                      <li>
                        Le processus de Commande vous permet de vérifier et de corriger d'éventuelles erreurs avant de nous
                        soumettre votre Commande. Prenez le temps de lire et de vérifier votre Commande à chaque étape du
                        processus de Commande et avant de soumettre définitivement votre Commande.
                      </li>
                      <li>
                        Nous sommes nommés agent commercial du Prestataire pour conclure des Réservations en son nom et le Contrat
                        Prestataire sera formé lorsque nous vous enverrons une confirmation écrite (habituellement par courriel)
                        (« Confirmation de Commande »). Concernant les Commandes de Cartes cadeaux Sindoor, la réception d'une
                        confirmation par courriel ou d'un coupon électronique (quelque que soit le premier reçu) constituera une
                        Confirmation de Commande. Si vous ne recevez pas de Confirmation de Commande de notre part, il vous
                        appartient de nous contacter via notre Application pour vérifier que votre Commande a bien été confirmée
                        auprès de notre Prestataire. Votre Confirmation de Commande constitue votre reçu de Sindoor. Si vous
                        exigez un reçu de TVA, vous devez contacter le Prestataire directement. Vous trouverez plus d’information
                        à la clause 8.2 ci- dessous.
                      </li>
                      <li>
                        Si vous souhaitez reporter une Réservation, après avoir reçu une Confirmation de Commande, vous devez
                        traiter la question directement avec le Prestataire: le Prestataire s’efforcera de vous proposer une autre
                        heure et/ou date appropriée, dans la mesure du possible. Notez que la capacité du Prestataire à répondre à
                        votre demande dépendra de la disponibilité du Prestataire au moment où vous voulez reporter votre
                        rendez-vous. Le fait que vous soyez éligible ou non à un remboursement dépendra du Prestataire et des
                        conditions communiquées lors du processus de Réservation.
                      </li>
                      <li>
                        Vous pouvez contacter le Prestataire via notre Application. Notez que la capacité du Prestataire à
                        répondre à votre demande dépendra de la disponibilité du Prestataire au moment où vous voulez reporter
                        votre Réservation.
                      </li>
                      <li>
                        Comme indiqué dans nos Conditions d'utilisation de l’Application, nous nous réservons le droit de retirer
                        l'accès à notre Application et/ou d'annuler une Commande si vous échouez à une vérification de solvabilité
                        ou à un contrôle de prévention des fraudes ou si nous suspectons raisonnablement une fraude ou un
                        blanchiment de capitaux de votre part ou de la part de quelqu'un utilisant votre compte.
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>4. Services</h6>
                    <ul>
                      <li>
                        Nos Prestataires ont l'obligation légale de fournir des Services conformes au Contrat Prestataire
                        concerné.
                      </li>

                      <li>
                        Tous les Services figurant sur notre Application sont sous réserve de leur disponibilité et les images
                        et/ou descriptions des Services sur notre Application sont données à titre d'illustration et les Services
                        réels peuvent différer de ces images et/ou descriptions. Nous exigeons de nos Prestataires qu'ils
                        s'assurent que toutes les informations qu'ils fournissent pour être affichées sur leur page de notre
                        Application sont exactes, complètes, et non trompeuses à quelque égard que ce soit mais nous ne pouvons
                        pas vérifier les informations qu'ils nous fournissent. Il relèvera de la responsabilité de chaque
                        Prestataire de s'assurer que tous ses Services énumérés sur notre Application sont disponibles et décrits
                        avec exactitude.
                      </li>
                      <li>
                        Si vous êtes un consommateur, vous avez des droits légaux à propos des Services défectueux, non conformes
                        à leur description, ou dans le cadre desquels il n’a pas été fait preuve de diligence et de compétences
                        raisonnables. Des conseils relatifs à vos droits légaux sont disponibles sur le site
                        www.europe-consommateurs.eu. Aucune stipulation des présentes Conditions générales de réservation
                        n'affectera ces droits légaux.
                      </li>
                      <li>
                        Il relève de votre seule responsabilité (ou de la seule responsabilité de la personne recevant les
                        Services) de communiquer à l'avance au Prestataire tous problèmes et/ ou besoins spéciaux qui pourraient
                        affecter ou être affectés par des Services (par exemple des informations relatives à une situation qui
                        pourrait empêcher la bonne exécution de la prestation ou causer des dommages et préjudices corporels,
                        moraux, matériels, etc.). Sous réserve de la clause 9.3, si vous (ou la personne recevant les Services) ne
                        communiquez pas ces informations au Prestataire concerné, ni Sindoor, ni le Prestataire concerné ne seront
                        responsables à votre égard (ou à l'égard de la personne recevant les Services) en cas de blessure, perte,
                        dommage ou préjudice résultant des Services qui aurait pu raisonnablement être évité si vous (ou la
                        personne recevant les Services) aviez communiqué ces informations avant de recevoir les Services.
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>5. Annulations</h6>
                    <ul>
                      <li>
                        En plus de vos autres droits prévus par la loi, vous pouvez, dans certaines circonstances, avoir le droit
                        d'annuler un Contrat Prestataire et/ou un Contrat Sindoor (selon le cas) et recevoir un remboursement
                        conformément aux conditions énoncées dans la présente clause 5.
                      </li>
                      <li>
                        Si vous changez d'avis à propos d'une Commande, d’une Réservation ou de Carte cadeau Sindoor et que vous
                        souhaitez l'annuler, les conditions d'annulation suivantes s'appliquent :
                        <ul>
                          <li>
                            <h6>Réservations </h6>
                            <ul>
                              <li>
                                Les annulations de Réservations doivent être faites en utilisant l’une des méthodes suivantes :
                                <ul>
                                  <li>votre compte Sindoor via l'Application</li>
                                  <li>directement auprès du Prestataire</li>
                                </ul>
                              </li>
                              <li>
                                ATTENTION, DANS UN PETIT NOMBRE DE CAS, IL PEUT NE PAS ÊTRE POSSIBLE D'ANNULER UNE RÉSERVATION
                                (PAR EXEMPLE SI VOUS FAITES UNE RÉSERVATION MOINS DE 24 HEURES AVANT LA FOURNITURE DU PRODUIT OU
                                DU SERVICE) MAIS NOUS ATTIRERONS VOTRE ATTENTION SUR CE POINT AVANT QUE VOUS PASSIEZ COMMANDE AFIN
                                QUE VOUS PUISSIEZ DÉCIDER SI VOUS ÊTES PRÊTS OU NON À CONCLURE LE CONTRAT SUR CETTE BASE.
                              </li>
                              <li>
                                AUCUN REMBOURSEMENT NE SERA FAIT EN CAS DE TENTATIVE D'ANNULATION MOINS DE 24 HEURES AVANT LA
                                FOURNITURE DU PRODUIT OU DU SERVICE.
                              </li>
                            </ul>
                            <li>
                              <h6>Cartes cadeaux Sindoor</h6>
                              <ul>
                                <li>
                                  Si vous annulez une Carte cadeau Sindoor dans les 14 jours suivant la réception de votre
                                  Confirmation de Commande, exerçant ainsi Page sur 4 8 votre droit légal de rétractation, vous
                                  aurez droit au remboursement du montant concerné via le mode de paiement initial à condition que
                                  vous ne l'ayez pas déjà utilisé pour un achat. Nous accorderons le remboursement dû dans les 14
                                  jours suivant l'accord intervenu avec vous sur ce remboursement conformément à la présente
                                  clause 5
                                </li>
                                <li>
                                  Si les Termes et Conditions de réservation le permettent, les annulations de cartes-cadeaux
                                  Sindoor doivent être effectuées en envoyant un email au service client.
                                </li>
                                <li>
                                  ATTENTION, AUCUN REMBOURSEMENT N'AURA LIEU EN CAS DE TENTATIVE D'ANNULATION APRÈS QU'UNE CARTE
                                  CADEAU SINDOOR A ÉTÉ UTILISÉE EN INTÉGRALITÉ POUR UN ACHAT.
                                </li>
                                <li>
                                  ATTENTION, EN CAS DE TENTATIVE D'ANNULATION APRÈS QU'UNE CARTE CADEAU SINDOOR A ÉTÉ UTILISÉE EN
                                  PARTIE POUR UN ACHAT, AUCUN REMBOURSEMENT N'AURA LIEU POUR LA PARTIE UTILISÉE DE LA CARTE CADEAU
                                  SINDOOR.
                                </li>
                              </ul>
                            </li>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>6. Résolution des problèmes </h6>
                    <ul>
                      <li>
                        Nous accordons de l'importance à votre expérience et nous voulons nous assurer de maintenir les normes les
                        plus élevées possibles ; par conséquent si vous voulez faire une réclamation à propos d'un de nos
                        Prestataires ou de leurs Services, nous vous remercions de, au choix :
                        <ul>
                          <li>parler vous-même au Prestataire pour tenter de résoudre le problème ;</li>
                          <li>laisser un avis honnête via l'Application reflétant votre expérience et/ou ;</li>
                          <li>
                            nous envoyer un message notre Application ou nous écrire à l’adresse du siège de l’entreprise Sindoor,
                            à Paris et nous ferons de notre mieux pour vous aider.
                          </li>
                        </ul>
                      </li>
                      <li>
                        À réception d'une réclamation, nous contacterons le Prestataire pour tenter de résoudre le problème en
                        votre nom. Si nous ne sommes pas en mesure de résoudre le problème après avoir contacté le Prestataire, et
                        si nous considérons que cela est juste compte tenu des circonstances, nous pouvons choisir, à notre seule
                        discrétion et dans un esprit de bonne volonté, de :
                        <ul>
                          <li>
                            vous remettre un avoir pour le montant de votre Commande objet du litige/ de la réclamation (à
                            utiliser sur l'Application pour réduire le prix d'achat de Services) ; ou
                          </li>
                          <li>
                            en dernier recours ou dans des circonstances exceptionnelles, et toujours à notre seule discrétion,
                            vous rembourser directement le montant objet du litige/ de la réclamation via le mode de paiement
                            initial. À noter que la réception du remboursement intégral dans de tels cas peut prendre jusqu'à 30
                            jours.
                          </li>
                        </ul>
                      </li>
                      <li>
                        NOTE IMPORTANTE : GARDEZ À L'ESPRIT QUE BIEN QUE NOUS PRENIONS TRÈS AU SÉRIEUX TOUTES LES RÉCLAMATIONS
                        FAITES À PROPOS DE NOS PRESTATAIRES ET QUE NOUS FERONS TOUJOURS CE QUE NOUS POURRONS POUR AIDER À RÉSOUDRE
                        LES PROBLÈMES, NOUS NE SOMMES PAS RESPONSABLES À VOTRE ÉGARD DES SERVICES QUE LES PRESTATAIRES FOURNISSENT
                        ET NOUS N'AVONS PAS L'OBLIGATION DE VOUS ACCORDER UN REMBOURSEMENT OU UN AVOIR SI VOUS N'ÊTES PAS
                        SATISFAIT DES SERVICES QUE VOUS AVEZ REÇUS DE NOS PRESTATAIRES.
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>7. Cartes cadeaux Sindoor </h6>
                    <ul>
                      <li>
                        Les Cartes cadeaux Sindoor sont émises par Sindoor sous forme électronique vers l'adresse courriel fournie
                        au moment de la Commande. Vous ne pouvez utiliser une Carte cadeau Sindoor pour les commandes en ligne
                        faites par l'intermédiaire de l'Application que pour des Services. Cela signifie que nous réduirons le
                        prix d'achat dû pour les Services de la valeur de votre Carte cadeau Sindoor. Si le prix d'achat des
                        Services est inférieur à la valeur de votre Carte cadeau Sindoor, le solde sur votre Carte cadeau Sindoor
                        sera indiqué dans la partie « Mon Porte-monnaie » de votre profil (il vous faudra créer un profil pour
                        pouvoir utiliser votre Carte cadeau Sindoor pour la première fois).
                      </li>
                      <li>Les Cartes cadeaux Sindoor peuvent être annulées uniquement conformément à la clause 5.</li>
                      <li>
                        Vous ne pouvez pas utiliser une Carte cadeau Sindoor pour :
                        <ul>
                          <li>effectuer le paiement d’un Service par une autre voie que celle de notre Application ;</li>
                          <li>acheter d'autres cartes cadeaux Sindoor ; ou</li>
                          <li>échanger le solde d’une Carte cadeau Sindoor contre de l'argent. </li>
                        </ul>
                      </li>
                      <li>
                        Toutes les Cartes cadeaux Sindoor sont valables pendant une durée de douze mois après la date d'achat. La
                        date d'expiration de votre Carte cadeau Sindoor sera incluse dans votre Confirmation de Commande. Si vous
                        avez ajouté la Carte cadeau Sindoor à un compte, vous pourrez également voir la date d'expiration du solde
                        de votre Carte cadeau Sindoor en vous connectant et en visitant la partie Mon Porte-monnaie de votre
                        profil.
                      </li>
                      <li>
                        Vous êtes tenu de conserver votre Carte cadeau Sindoor en toute sécurité et nous n'assumons aucune
                        responsabilité en cas de perte, vol, détérioration ou utilisation sans autorisation des Cartes cadeaux
                        Sindoor. Si vous avez connaissance qu'une Carte cadeau Sindoor a été perdue ou volée, vous devez nous
                        contacter immédiatement via notre Application et nous annulerons la Carte cadeau Sindoor et vous en
                        délivrerons une nouvelle à condition que la Carte cadeau Sindoor n'ait pas été déjà utilisée.
                      </li>
                      <li>
                        Sindoor ne délivre pas de Cartes cadeaux Sindoor d'une durée de plus de 12 mois maximum et ne délivre pas
                        de cartes cadeaux papier. Celles-ci sont délivrées uniquement sous format électronique.{" "}
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>8. Prix et paiement </h6>
                    <ul>
                      <li>
                        Les prix et les frais de livraison et/ou de traitement applicables seront ceux indiqués sur l’Application.
                      </li>
                      <li>
                        Le Prestataire porte l’entière responsabilité de compter la TVA sur la valeur totale de la Commande, quand
                        cela est nécessaire. Sindoor ne vous facture pas la TVA sur les Commandes lorsque les services sont rendus
                        par le Prestataire et non par Sindoor. Par conséquent, Sindoor ne peut vous procurer une facture TVA
                        relative à votre Commande. Vous devrez contacter directement le Prestataire pour obtenir une facture TVA,
                        le cas échéant.
                      </li>
                      <li>
                        Le paiement de tous les Services doit être effectué au moment de la réservation, en euros, par carte
                        bancaire, ou via un organisme de paiement tiers tel que PayPal ou en utilisant le Service de Paiement. Si
                        vous choisissez de payer via un organisme de paiement tiers, vous serez redirigé vers son site pour
                        procéder au paiement et vous serez soumis à ses conditions générales, politique de confidentialité et
                        autres conditions d'utilisation.
                        <span className="spanText">Vérifiez-les avec attention avant de confirmer votre Commande.</span> Vous
                        serez tenu de préserver la confidentialité de votre identifiant utilisateur du Site internet ou de
                        l'Application et de votre mot de passe ou de toute autre information de sécurité que vous utilisez pour
                        vous connecter à votre compte sur le Service de Paiement. Les coûts de conversion ou autres charges que
                        vous encourrez en effectuant un paiement seront à votre charge en plus du prix que vous nous devez.
                      </li>
                      <li>
                        Les paiements effectués par l'intermédiaire du Service de Paiement sont traités par des prestataires de
                        paiement externes. Sindoor veille à ce que le Service de Paiement soit disponible et fonctionne à tout
                        moment mais ne peut pas garantir un accès continu, ininterrompu ou sécurisé au Service de Paiement, et ne
                        peut pas non plus garantir que le service est exempt de virus ou d'erreur. Nous utilisons des prestataires
                        de paiement externes pour traiter les paiements et dans la mesure où beaucoup de facteurs échappent à
                        notre contrôle (tels que les retards du système bancaire ou des réseaux de carte), nous ne pouvons pas
                        prévoir ou garantir le temps nécessaire pour réaliser le traitement de votre paiement. L'accès au Service
                        de Paiement peut être occasionnellement restreint pour permettre des réparations, la maintenance ou
                        l'introduction de nouvelles installations ou de nouveaux services. Nous essaierons de vous informer à
                        l'avance des interruptions prévues de ce Service de Paiement et ferons de notre mieux pour rétablir le
                        service dans les meilleurs délais.
                      </li>
                      <li>
                        Si vous payez des Services via le Service de Paiement, Sindoor percevra le règlement en sa qualité d'agent
                        commercial du Prestataire concerné. La réception de votre règlement des Services par Sindoor apurera votre
                        dette à l'égard du Prestataire pour le compte duquel Sindoor a perçu le paiement.{" "}
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>9. Responsabilité </h6>
                    <ul>
                      <li>
                        Si nous avons fait preuve de négligence et/ou si nous ne respectons pas une obligation contractuelle à
                        votre égard, nous serons responsables de toute perte ou tout dommage que vous subissez de ce fait à
                        condition que la perte et/ou le dommage soit prévisible. Une perte ou un dommage est prévisible s'il est
                        une conséquence manifeste de notre négligence ou de notre manquement au contrat, ou s'il avait été
                        considéré par vous et nous comme une probable conséquence de celui-ci au moment de la conclusion du
                        Contrat Sindoor.
                      </li>
                      <li>
                        Nous n'assumons aucune responsabilité pour les types de perte suivants occasionnés par un manquement
                        contractuel ou extracontractuel (y compris la négligence) ou autre, même si la perte est prévisible :
                        perte de revenus, perte d'activité, perte de bénéfices, perte d'économies anticipées, perte de temps de
                        gestion ou de bureau.
                      </li>
                      <li>
                        Nous n'excluons ou ne limitons pas notre responsabilité en cas de décès ou de dommage corporel résultant
                        de notre négligence, en cas de fraude ou de déclaration frauduleuse ou dans tous les autres cas où notre
                        responsabilité ne peut pas être exclue ou limitée en vertu du droit français.
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>
                      10. Notre droit de modifier les présentes Conditions générales de réservation.
                    </h6>
                    <ul>
                      <li>
                        Nous pouvons modifier les présentes Conditions générales de réservation de temps à autre dans les cas
                        suivants :
                        <ul>
                          <li>si nous changeons le processus d'acceptation des paiements de votre part ;</li>
                          <li>en cas de changement dans les lois et les exigences règlementaires ; et/ou</li>
                          <li>
                            en cas de tout autre changement dans notre activité qui nécessite que nous modifiions les présentes
                            Conditions générales de réservation.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Chaque fois que vous commandez des Services ou des Cartes cadeaux Sindoor par l'intermédiaire de notre
                        Application, les Conditions générales de réservation alors en vigueur (et disponibles à la consultation
                        sur notre Application et acceptés par vous à la sortie) s'appliqueront au Contrat Sindoor conclu entre
                        vous et nous et au Contrat Prestataire conclu entre vous et le Prestataire.{" "}
                        <span className="spanText">
                          Vous pouvez trouver la date de dernière mise à jour des présentes Conditions générales de réservation en
                          haut de cette page.
                        </span>
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "1%" }}>11. Généralités</h6>
                    <ul>
                      <li>
                        Toutes les communications et notifications de votre part doivent être envoyées à Sindoor par message sur
                        notre Application ou par courrier à l'adresse postale du siège de Sindoor, à Paris. Sindoor peut
                        communiquer et vous adresser des notifications par courrier, par courriel ou en affichant des avis sur
                        notre Application.{" "}
                      </li>
                      <li>
                        Les horaires de notre service clients sont les suivants : 8h30-19h00 du lundi au vendredi, et 9h00-18h00
                        le samedi et les jours fériés (fermeture le dimanche, le jour de Noël et le Jour de l'an).
                      </li>
                      <li>
                        Sindoor se réserve le droit de désactiver le compte d’un Client Sindoor dans l’hypothèse d’une violation
                        des présentes Conditions Générales de Réservation et/ ou dans l’hypothèse où le Client agirait d’une
                        manière inappropriée, abusive ou inacceptable vis-à-vis de notre service clients ou des employés d’un
                        Prestataire, que ce soit par téléphone ou email, ou en personne sur les lieux en compagnie du prestataire.{" "}
                      </li>
                      <li>
                        Si une stipulation des présentes Conditions générales de réservation est jugée nulle, illégale ou
                        inapplicable à quelque égard que ce soit par une autorité compétente, cette stipulation sera séparée des
                        autres à cet égard qui resteront valables dans toute la mesure autorisée par la loi.{" "}
                      </li>
                      <li>
                        Les présentes Conditions générales de réservation seront régies et interprétés conformément au droit
                        français. Vous et nous reconnaissons chacun la compétence territoriale des tribunaux franciliens pour
                        juger de toute affaire ou tout litige résultant de ou en lien avec la passation de commande et/ou la
                        fourniture de Services par l'intermédiaire de notre Application.
                      </li>
                    </ul>
                  </div>
                  <p>
                    <span className="spanText">Annexe I : Modèle de formulaire de rétractation</span> Modèle de formulaire de
                    rétractation (Complétez ce formulaire et retournez-le uniquement si vous souhaitez annuler le contrat){" "}
                  </p>
                  <div>
                    <p className="termsContactDetails">À l'attention de : Sindoor.</p>
                    <p className="termsContactDetails">Paris</p>
                    <p className="termsContactDetails">Contact : formulaire sur l’Application</p>
                  </div>
                  <div style={{ marginTop: "2%" }}>
                    <p className="termsContactDetails">J'accepte /Nous acceptons* par les présentes que notre contrat relatif </p>
                    <p className="termsContactDetails">à la vente des produits suivants [Description des produits]* </p>
                    <p className="termsContactDetails">
                      la livraison du contenu numérique suivant [Description du contenu numérique]*{" "}
                    </p>
                    <p className="termsContactDetails">l'exploitation du service suivant [Description du service]* </p>
                    <p className="termsContactDetails">soit révoqué </p>
                    <p className="termsContactDetails">
                      Commandé le/Reçu le [Date de Commande des Services ou de Réception des Produits]*
                    </p>
                    <p className="termsContactDetails">[Nom du consommateur]</p>
                    <p className="termsContactDetails">[Adresse du consommateur] </p>
                    <p className="termsContactDetails">
                      [Signature du ou des consommateur(s)] (seulement lorsque ce formulaire est remis sous forme papier)
                    </p>
                    <ul>
                      <li style={{ listStyleType: "circle" }}> Rayez la mention inutile ou complétez le cas échéant.</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="card card-body mb-1">
          <div className="tittle filetittle">
          <span className={showFileInfo2 ? "order-color": "order"}>2</span>
          <div className="justifySpace" >
            <div className="titleHeading" >
            <h4>Conditions et politiques de Sindoor</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo2: !this.state.showFileInfo2 })}
                className={this.state.showFileInfo2 ? "fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
            </div>
          </div>
          {showFileInfo2 ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div
                  className="subtittle"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                >
                  <div>
                    <h4>2 — Conditions et politiques de Sindoor</h4>
                    <p style={{ fontWeight: "500" }}>
                      Lisez attentivement les présentes Conditions et Politiques avant de commencer à utiliser notre Application
                      et avant de réserver des produits ou services d'un tiers par l'intermédiaire de notre Application . Nous
                      vous recommandons d'imprimer un exemplaire des présentes pour les consulter ultérieurement.{" "}
                    </p>
                    <p style={{ fontWeight: "500" }}>
                      En utilisant notre Application , vous confirmez que vous acceptez les présentes Conditions et Politiques et
                      que vous vous engagez à les respecter, que vous choisissiez ou non de vous inscrire auprès de nous. Si vous
                      n'acceptez pas les présentes Conditions et Politiques, vous ne devez pas utiliser notre Application de
                      quelque manière que ce soit.
                    </p>
                    <ul>
                      <li>
                        Bienvenue sur l'Application mobile Sindoor. L’Application est fourni par Sindoor, une société immatriculée
                        en France sous le numéro * * * * *, dont le siège est situé à Paris, et dotée du numéro d'identification
                        TVA * * * * * (« Sindoor », « nous », « notre » ou « nos »). « Vous », « votre » et « vos » vous désignent
                        en tant qu'utilisateur de notre Application .
                      </li>
                      <li>
                        L’Application a deux fonctions principales :
                        <ul>
                          <li>
                            le regroupement d'informations et la fourniture d'un point de réservation centralisé pour une
                            sélection de fournisseurs de produits et services tiers qui souhaitent proposer à la vente leurs
                            produits et services par l'intermédiaire de notre Application (les « Prestataires ») ; et
                          </li>
                          <li>la fourniture d'informations générales en lien avec l’événementiel. </li>
                        </ul>
                      </li>
                      <li>
                        Nous avons établi les conditions dans lesquelles nous vous fournissons un accès à notre Application et aux
                        produits ou services que nous proposons à partir de notre Application . Celles-ci comprennent les
                        conditions qui régissent :
                        <ul>
                          <li>vos droits d'utiliser et de créer un lien vers notre Application ; </li>
                          <li>la manière dont nous utiliserons et protègerons les informations vous concernant ;</li>
                          <li>
                            nos conditions de réservation concernant les produits ou services de tiers que nous proposons à partir
                            de notre Application mobile ; et
                          </li>
                          <li>
                            vos obligations lorsque vous postez des commentaires ou autres contributions et contenus sur notre
                            Application .
                          </li>
                        </ul>
                      </li>
                      <li>
                        À noter que les Conditions et Politiques ne régissent pas les relations entre Sindoor et nos Prestataires.
                        Si vous êtes un Prestataire, reportez-vous aux « Conditions commerciales Prestataire » qui vous ont été
                        remises lors de votre inscription. Si vous n'êtes pas encore un Prestataire mais que vous souhaitez
                        postuler auprès de Sindoor pour devenir l'un de nos Prestataires, inscrivez-vous sur notre Application en
                        créant un compte Prestataire.
                      </li>
                    </ul>
                    <h4>CONDITIONS D'UTILISATION DE L’APPLICATION</h4>
                    <p className="termsParagraph">
                      Lisez attentivement les présentes Conditions d'utilisation de l'Application avant de commencer à utiliser
                      notre Application dans la mesure où elles s'appliquent à votre utilisation de notre Application. Nous vous
                      recommandons d'imprimer un exemplaire des présentes pour les consulter ultérieurement.
                    </p>
                    <p className="termsParagraph">
                      Les présentes Conditions d'utilisation de l'Application font référence aux conditions complémentaires
                      suivantes qui s'appliquent également à votre utilisation de notre Application :
                    </p>
                    <ul>
                      <li style={{ listStyleType: "circle" }}>
                        Notre <span className="underlineText">Politique de confidentialité et cookies </span>; et
                      </li>
                      <li style={{ listStyleType: "circle" }}>
                        Notre <span className="underlineText">Politique relative au contenu généré par les utilisateurs.</span>
                      </li>
                    </ul>
                    <p className="termsParagraph" style={{ marginTop: "1%" }}>
                      En utilisant notre Application, vous confirmez que vous acceptez les présentes Conditions d'utilisation de
                      l'Application et que vous vous engagez à les respecter. Si vous n'acceptez pas les présentes Conditions
                      d'utilisation de l'Application, vous ne devez pas utiliser notre Application.
                    </p>
                    <p className="termsParagraph">
                      À noter que les présentes Conditions d'utilisation de l'Application couvrent uniquement votre utilisation de
                      notre Application et qu'elles NE s'appliquent PAS aux produits et services de tiers disponibles à la
                      réservation sur notre Application. Reportez-vous à nos{" "}
                      <span className="underlineText">Conditions générales de réservation</span> pour prendre connaissances des
                      conditions qui s'appliquent lorsque vous faites des réservations ou vous achetez des bons sur notre
                      Application.
                    </p>
                    <p className="termsParagraph">
                      Dans les présentes Conditions d'utilisation de l'Application, l'expression « Conditions et Politiques »
                      renvoie à certaines ou toutes les politiques suivantes : notre Politique de confidentialité et cookies,
                      notre Politique relative au contenu généré par les utilisateurs, les présentes Conditions d'utilisation de
                      l'Application et nos Conditions générales de réservation.
                    </p>

                    <ul>
                      <li>
                        <h6>Utilisation de notre Application </h6>
                        <ul>
                          <li>
                            Les présentes Conditions d'utilisation de l'Application exposent la manière dont vous pouvez utiliser
                            notre Application. En accédant à notre Application, vous acceptez les présentes Conditions
                            d'utilisation de l’Application, Les présentes Conditions d'utilisation de l’Application s’appliquent
                            quelle que soit la méthode que vous utilisez pour accéder à notre Application, y compris notamment
                            internet, des services de télévision numérique et un téléphone mobile.{" "}
                          </li>
                          <li>
                            Si vous n'acceptez pas les présentes Conditions d'utilisation de l'Application, vous ne devez pas
                            utiliser notre Application. Vous devez lire toutes les Conditions d'utilisation de l'Application avant
                            d'utiliser l’Application.
                          </li>
                          <li>
                            En utilisant notre Application, vous garantissez que vous disposez de la capacité juridique pour
                            accepter les présentes Conditions d'utilisation et que vous utiliserez notre Application conformément
                            à toutes les Conditions et Politiques.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Accès à notre Application</h6>
                        <ul>
                          <li>
                            L'accès à notre Application est autorisé à titre temporaire. Nous nous réservons le droit de retirer
                            ou de modifier notre Application (et les produits ou services qui y sont proposés) sans avis
                            préalable. Nous ne serons pas responsables en cas d’indisponibilité de notre Application ou de toute
                            partie de celle-ci pour quelque raison que ce soit, à tout moment et pour quelque durée que ce soit.
                          </li>
                          <li>
                            Nous mettons de temps à autre notre Application à jour et pouvons ainsi modifier le contenu à tout
                            moment sans vous en informer. Nous nous réservons le droit de retirer, modifier ou suspendre
                            l’Application (ou toute partie de celle-ci) à tout moment sans avis préalable.
                          </li>
                          <li>
                            Les contenus et informations affichés sur notre Application ne sont pas destinés à constituer des
                            conseils et ne doivent pas être interprétés comme tels. Nous déclinons par conséquent toute
                            responsabilité découlant de la fiabilité accordée à ces informations, dans toute la mesure permise par
                            les lois applicables.
                          </li>
                          <li>
                            Vous êtes tenu de prendre toutes les mesures nécessaires pour accéder à notre Application, et pour la
                            visualiser, et vous devez vous assurer que vous disposez d'un logiciel antivirus à jour sur tout
                            appareil à partir duquel vous accédez à notre Application.
                          </li>
                          <li>
                            Vous êtes tenu de vous assurer que toutes les personnes qui accèdent à notre Application par
                            l'intermédiaire de votre connexion internet ont connaissance des présentes Conditions d'utilisation de
                            l’Application.
                          </li>
                          <li>
                            Nous nous réservons expressément le droit de retirer l'accès à notre Application et/ ou d'annuler une
                            commande si vous échouez à une vérification de solvabilité ou à un contrôle de prévention des fraudes
                            ou si nous suspectons raisonnablement une fraude ou un blanchiment de capitaux de votre part ou de la
                            part de quelqu'un utilisant votre compte.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Mot de passe et sécurité du compte</h6>
                        <ul>
                          <li>
                            Vous êtes responsable de la sécurité de votre mot de passe et de vos informations de connexion. Pour
                            protéger votre compte contre tout accès non autorisé, vous êtes invité à conserver votre ou vos nom(s)
                            d'utilisateur et mot(s) de passe en toute sécurité. Assurez-vous que votre mot de passe n'est pas l'un
                            de ceux que vous avez utilisés précédemment, qu'il contient huit caractères ou plus et, dans l'idéal,
                            qu'il ne s'agit pas d'un mot de passe que vous utilisez sur d'autres sites. Nous vous recommandons de
                            ne pas communiquer votre ou vos nom(s) d'utilisateur et mot(s) de passe à quiconque. Nous vous
                            recommandons également de vous déconnecter de votre compte à la fin de chaque session. Vous pouvez
                            également vouloir fermer votre navigateur lorsque vous avez terminé votre session, en particulier si
                            vous partagez un ordinateur avec quelqu'un d'autre ou si vous utilisez un ordinateur dans un lieu
                            public.
                          </li>
                          <li>
                            Si vous soupçonnez un accès non autorisé à votre compte, vous devez nous en informer immédiatement en
                            nous contactant via notre Application. Nous enquêterons sur toute activité non autorisée présumée de
                            votre compte.Nonobstant toute autre stipulation relative à notre droit de désactiver ou de bloquer
                            l'accès à votre compte, nous nous réservons le droit de désactiver ou de bloquer votre compte à tout
                            moment en cas de suspicion d'accès non autorisé à votre compte.
                          </li>
                          <li>
                            Sauf en cas de négligence grave de notre part, nous ne pouvons être tenus responsables de tout dommage
                            éventuel ayant des conséquences néfastes causé par un accès non autorisé à votre compte par des tiers.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Utilisation abusive de notre Application</h6>
                        <ul>
                          <li>
                            Vous ne devez pas utiliser notre Application de manière abusive :
                            <ul>
                              <li>
                                en introduisant sciemment des virus, chevaux de Troie, vers, bombes logiques, bombes à
                                retardement, espions de clavier, logiciels espions, logiciels publicitaires ou tout autre élément,
                                programme ou code qui perturbent ou visent à perturber le fonctionnement de tout logiciel ou
                                matériel informatique ; et/ou
                              </li>
                              <li>
                                en obtenant ou tentant d'obtenir un accès non autorisé au serveur sur lequel notre Application est
                                stocké ou à tout serveur, ordinateur ou base de données connecté à notre Application ; et/ou
                              </li>
                              <li>
                                en attaquant notre Application par l'intermédiaire d'une attaque par déni de service ou d'une
                                attaque par déni de service distribué.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Le non-respect de cette clause peut constituer une infraction pénale au titre de la Computer Misuse
                            Act de 1990. Nous déclarerons toute violation aux autorités compétentes chargées de l'Application du
                            droit et nous coopèrerons avec ces autorités en leur communiquant votre identité. En cas de violation
                            de ce type, votre droit d'utiliser notre Application cessera immédiatement.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Utilisateurs</h6>
                        <ul>
                          <li>
                            Si vous êtes âgé de 18 ans ou plus, vous pouvez créer un compte et devenir un utilisateur inscrit de
                            notre Application (« Utilisateur »).
                          </li>
                          <li>
                            En tant qu'Utilisateur vous pouvez avoir accès à des produits ou services et/ou fonctionnalités
                            supplémentaires, tels que la possibilité de créer un compte, de sauvegarder des informations de
                            contact, d’afficher du contenu généré par les utilisateurs (« CGU ») sur notre Application, et de
                            recevoir des informations sur les promotions et offres spéciales réservées aux Utilisateurs le cas
                            échéant.
                          </li>
                          <li>
                            Les informations personnelles que vous nous fournissez pendant le processus d’inscription en tant
                            qu'Utilisateur ou après l’inscription seront conservées et utilisées conformément au consentement reçu
                            de votre part et aux conditions de notre Politique de confidentialité et cookies.
                          </li>
                          <li>
                            Nous avons également le droit de désactiver, à tout moment, un code d'identification utilisateur ou un
                            mot de passe, que vous avez choisi ou que nous vous avons attribué, si nous estimons que vous n'avez
                            pas respecté l'une des stipulations de nos Conditions et Politiques. Si vous savez ou soupçonnez que
                            quelqu'un d'autre que vous connaît votre nom d'utilisateur ou votre mot de passe, vous devez nous en
                            informer immédiatement via notre Application.{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Affichage de CGU </h6>
                        <ul>
                          <li>
                            Si la fonctionnalité de notre Application le permet, les Utilisateurs ou autres visiteurs de notre
                            Application qui se connectent à un compte de média social via un widget ou une interface disponible
                            sur ou hors de l’Application, peuvent afficher du CGU sur l’Application.
                          </li>
                          <li>
                            Tout CGU affiché sera attribué au nom d'utilisateur que vous fournissez ou au nom d'utilisateur du
                            compte de média social avec lequel vous vous êtes connecté mais nous ne publierons pas votre adresse
                            courriel sur l’Application.
                          </li>
                          <li>
                            Nous nous réservons le droit de refuser de publier un CGU (ou de retirer, sans préavis, un CGU
                            antérieurement publié) s'il ne respecte pas notre Politique relative au contenu généré par les
                            utilisateurs. Nous ne saurions être tenus responsables en cas de perte ou de dommages résultant de
                            cette décision de refuser de publier du CGU (ou de retirer du CGU antérieurement publié).
                          </li>
                          <li>
                            Nous nous réservons également le droit de fermer les comptes utilisateur et/ou d'interdire à certains
                            utilisateurs d’afficher du CGU sur l’Application en cas de violation persistante et/ou grave des
                            conditions de la Politique relative au contenu généré par les utilisateurs.
                          </li>
                          <li>
                            Les avis et opinions exprimés dans le CGU soumis par les Utilisateurs ou d'autres membres du public
                            sont ceux de la personne qui soumet le CGU et non ceux de Sindoor et nous n'assumons aucune
                            responsabilité pour le contenu de ce CGU.
                          </li>
                          <li>
                            Toutefois, si vous estimez qu'un CGU figurant sur l’Application est offensant, obscène, diffamatoire,
                            raciste, nuisible, inexact, illicite, illégal ou trompeur de quelque manière que ce soit,
                            veuillez-nous en informer via l’Application en indiquant comme objet « Contenu répréhensible ». À
                            réception de votre réclamation, nous pourrons retirer ou bloquer l'accès au CGU faisant l'objet de la
                            réclamation.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Propriété intellectuelle</h6>
                        <ul>
                          <li>
                            Vous pouvez accéder, visualiser et imprimer une copie de l’Application et de toutes les informations,
                            images et autres contenus (à l'exception du CGU) affichés sur l’Application (les « Contenus ») dans le
                            strict respect des présentes Conditions d'utilisation de l'Application.{" "}
                          </li>
                          <li>
                            Vous pouvez visualiser, imprimer, utiliser, citer ou mentionner l’Application et les Contenus pour
                            votre usage personnel et non-commercial uniquement et à la condition que vous citiez dûment Sindoor.
                          </li>
                          <li>
                            Aucun élément de la licence qui précède ne restreint ou n'affecte les droits moraux de l'auteur sur
                            les Contenus.
                          </li>
                          <li>
                            Nous nous réservons expressément tous les droits de propriété intellectuelle sur l’Application et les
                            Contenus, et votre utilisation de notre Application et des Contenus est soumise aux restrictions
                            suivantes. Vous ne devez pas :
                            <ul>
                              <li>
                                retirer les avis relatifs aux droits d'auteur ou autres mentions de propriété contenus dans les
                                Contenus ; et/ou
                              </li>
                              <li>
                                utiliser des Contenus provenant de notre Application d'une manière qui pourrait porter atteinte à
                                nos droits d'auteur, droits de propriété intellectuelle ou droits exclusifs ou à ceux de tiers ;
                                et/ou{" "}
                              </li>
                              <li>
                                utiliser, ou faire utiliser par d'autres, un système automatisé ou un logiciel pour extraire du
                                contenu ou des données de notre Application (« capture d'écran »), sauf dans les cas où vous ou un
                                tiers avez conclu un accord de licence écrit directement avec nous qui autorise expressément cette
                                activité ; et/ou{" "}
                              </li>
                              <li>
                                reproduire, modifier, afficher, exécuter, publier, distribuer, disséminer, diffuser, créer un
                                cadre (ou utiliser tout autre environnement de navigation ou de bordure), communiquer au public ou
                                transmettre à un tiers, ou exploiter notre Application et/ou les Contenus à des fins commerciales
                                sans notre consentement écrit préalable formalisé par un contrat de licence.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Marques</h6>
                        <ul>
                          <li>
                            Nous nous réservons expressément tous les droits sur le nom de domaine de notre Application et tous
                            les domaines et sous-domaines associés, la dénomination « Sindoor », notre logo, nos marques de
                            service, noms commerciaux et/ou marques de fabrique. D'autres marques de fabrique, noms de produits et
                            dénominations sociales cités sur l’Application peuvent être des marques de leurs propriétaires ou
                            concédants respectifs et les droits sur ces marques sont réservés à leurs propriétaires ou concédants
                            respectifs.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Lien vers notre Application </h6>
                        <ul>
                          <li>
                            Vous pouvez créer un lien vers n'importe quelle page de notre Application, à des fins non
                            commerciales, à condition que vous le fassiez d'une manière juste et légale, qui ne porte pas atteinte
                            à notre réputation ou qui n'en tire pas indûment avantage. Pour éviter toute ambiguïté, le site à
                            partir duquel le lien est créé ne doit pas contenir de contenu pour adultes ou illégal ou du contenu
                            offensant, susceptible de constituer du harcèlement ou autrement répréhensible.
                          </li>
                          <li>
                            Vous ne devez pas créer un lien vers notre Site internet d'une manière qui suggère toute forme
                            d'association, d'autorisation ou d'approbation de notre part si aucune n’existe. Vous ne devez pas
                            retirer ou masquer à l'aide d'un cadre ou de toute autre manière, les publicités, avis relatifs aux
                            droits d'auteur ou autres informations publiés sur le Site internet.{" "}
                          </li>
                          <li>
                            Notre Application ne doit pas être délimité ou être soumis à tout autre environnement de navigation ou
                            de bordure sur un autre site.
                          </li>
                          <li>
                            Si vous souhaitez créer un lien vers notre Application à des fins commerciales ou à toute autre fin
                            non prévue ci-dessus, ou si vous souhaitez devenir Prestataire, contactez-nous via notre Application.
                          </li>
                          <li>
                            Nous nous réservons le droit de retirer l'autorisation de créer des liens à tout moment et sans
                            préavis.{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Confidentialité, vos données à caractère personnel et cookies </h6>
                        <ul>
                          <li>
                            Nous accordons une grande importance à la confidentialité de vos données à caractère personnel.
                            Consultez notre Politique de confidentialité et cookies pour plus d'informations sur la manière dont
                            nous traitons vos données à caractère personnel, lorsqu'elles nous sont fournies, et la façon dont
                            nous utilisons les cookies.{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Contenu de tiers et sites internet de tiers</h6>
                        <ul>
                          <li>
                            Notre Application peuvent contenir des publicités proposées par des tiers. Ces tiers sont des
                            prestataires indépendants et ne sont en aucun cas des agents ou des employés de Sindoor. Ils sont
                            seuls responsables du contenu de ces publicités et sont tenus de s'assurer qu'il est conforme à
                            l'ensemble des lois et règlementations applicables. Nous n'assumons aucune responsabilité pour le
                            contenu des publicités de tiers.
                          </li>
                          <li>
                            Notre Application et/ou les Contenus peuvent contenir des liens ou des références vers des sites
                            internet de tiers (y compris ceux de nos Prestataires). Si vous décidez de visiter un site de tiers,
                            vous le faites à vos propres risques. Nous ne sommes pas responsables directement ou indirectement du
                            contenu, de l'exactitude ou des opinions exprimées sur ces sites internet, ou de la norme des produits
                            ou services disponibles par l'intermédiaire de ces sites internet. Sauf stipulation expresse
                            contraire, les liens ne signifient pas que nous, notre Application, sommes affiliés ou associés à ces
                            sites ou que nous approuvons leur contenu.
                          </li>
                          <li>
                            Nos communications avec vous peuvent contenir des informations provenant de sites internet de tiers.
                            Un Contenu provenant d'un site de tiers sera identifié comme tel et un lien vers le site internet
                            source pourra être fourni. Nous n'assumons aucune responsabilité pour les contenus fournis par ou
                            contenus sur un site internet de tiers obtenus par un lien à partir de nos communications avec vous ou
                            pour toute utilisation de données à caractère personnel par ce tiers.
                          </li>
                          <li>
                            L'insertion d'un lien dans nos communications avec vous n'implique pas notre approbation du site
                            auquel le lien mène. Si vous décidez d'accéder à des sites internet de tiers par des liens, vous le
                            faites à vos propres risques.
                          </li>
                          <li>
                            Rappelez-vous que si vous utilisez un lien pour vous rendre sur un autre site internet à partir de
                            notre Application, nos Conditions et Politiques (y compris notre Politique de confidentialité et
                            cookies) ne s’appliquent plus. Votre navigation et votre interaction sur un autre site internet, y
                            compris sur des sites internet qui sont liés au nôtre, sont soumises aux conditions et politiques de
                            ce site internet. Lisez ces conditions et politiques avant de poursuivre.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Notre Responsabilité</h6>
                        <ul>
                          <li>
                            Dans toute la mesure autorisée par la loi, nous excluons et rejetons toutes les garanties, conditions
                            et déclarations qui pourraient être implicitement prévues par loi en lien avec notre Application. En
                            particulier, nous ne faisons aucune déclaration et ne donnons aucune garantie quant au fait que l’
                            Application sera exempt d'erreurs, de virus ou d'autres éléments nuisibles ou que les défauts seront
                            corrigés. Vous devez prendre vos propres précautions à cet égard. Dans tous les cas et dans la mesure
                            autorisée par la loi, nous ne serons pas responsables en cas de perte ou de dommage causé par une
                            attaque de déni de service distribué, des virus ou d'autres éléments nuisibles d'un point de vue
                            technologique qui pourraient infecter votre équipement informatique, vos programmes informatiques, vos
                            données ou autres éléments exclusifs du fait de votre utilisation de notre Application.
                          </li>
                          <li>
                            Dans la mesure autorisée par la loi, nous n'assumons aucune responsabilité en cas de défaut de
                            maintenance de notre Application et/ou en cas de retard ou de défaut de livraison de Contenus.
                          </li>
                          <li>
                            Notez que nous proposons notre Application exclusivement pour une utilisation domestique et privée, et
                            vous vous engagez à ne pas utiliser notre Application à des fins commerciales ou professionnelles sauf
                            si nous vous avons accepté comme Prestataire.
                          </li>
                          <li>
                            Nous n'assumons aucune responsabilité pour les types de perte suivants, même si la perte est
                            prévisible : perte de revenus, perte d'activité, perte de bénéfices, perte d'économies anticipées,
                            perte de données ou perte de temps de gestion ou de bureau.
                          </li>
                          <li>
                            Les Contenus peuvent contenir des inexactitudes et des erreurs typographiques. Nous ne garantissons
                            pas l'exactitude ou l'exhaustivité des Contenus.
                          </li>
                          <li>
                            Nous ne saurions être tenus responsables de toute perte causée en raison de vos actions ou de votre
                            inaction basées sur les Contenus disponibles sur notre Application. Nous ne pouvons en outre être
                            tenus responsables des actes, erreurs, omissions, déclarations, garanties, manquements ou négligence
                            de tout tiers indépendant. Toutefois, aucune stipulation des présentes Conditions d'utilisation{" "}
                          </li>
                          <li>
                            de l'Application n'affecte vos droits légaux, ni n'exclut notre responsabilité en cas de décès ou de
                            dommage corporel résultant d'une négligence, en cas de fraude ou de déclaration frauduleuse et/ou dans
                            tous les autres cas où nous ne pouvons exclure ou limiter notre responsabilité en vertu du droit
                            français.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Pays desservis</h6>
                        <ul>
                          <li>
                            Notre Application est proposée uniquement aux utilisateurs se trouvant en France. Même si l'accès peut
                            être possible en dehors de la France, notre Application n’est pas destinée à cet usage et ces
                            utilisateurs accèdent à notre Application à leurs propres risques.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Modifications de nos Conditions d'utilisation de l'Application</h6>
                        <ul>
                          <li>
                            Nous pouvons modifier les présentes Conditions d'utilisation de l'Application de temps à autre, auquel
                            cas une version mise à jour sera disponible sur nostre Application. Il vous appartient de vérifier
                            régulièrement les présentes Conditions d'utilisation de l'Application pour vous assurer que les
                            modifications apportées vous conviennent. Vous serez réputé avoir accepté les modifications apportées
                            aux présentes Conditions d'utilisation de l'Application après avoir été informé des modifications sur
                            notre Application et/ou si vous continuez à accéder ou à utiliser l’Application où les Conditions
                            d'utilisation de l'Application mises à jour seront à votre disposition.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Respect des lois et droit applicable</h6>
                        <ul>
                          <li>
                            Les tribunaux franciliens auront compétence non-exclusive pour juger de tout litige découlant de ou en
                            lien avec une visite sur notre Application. Le droit français s'appliquera aux présentes Conditions
                            d'utilisation de l'Application.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Nous contacter</h6>
                        <ul>
                          <li>
                            Si vous avez des doutes ou des questions concernant les éléments figurant sur notre Application ou si
                            vous avez des questions concernant votre utilisation de notre Application ou concernant les présentes
                            Conditions d'utilisation de l'Application, envoyez-nous un courriel via notre Application. Pour toute
                            correspondance par voie postale, l’entreprise Sindoor est située à Paris.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="card card-body mb-1">
          <div className="tittle filetittle">
          <span className={showFileInfo3 ? "order-color": "order"}>3</span> 
          <div className="justifySpace" >
          <div className="titleHeading" >
            <h4>Politique de confidentialité et des cookies</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo3: !this.state.showFileInfo3 })}
                className={this.state.showFileInfo3 ? "fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
            </div>
          </div>
          {showFileInfo3 ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div
                  className="subtittle"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                >
                  <div>
                    <h4>3 — Politique de confidentialité et des cookies </h4>
                    <h6>Introduction</h6>
                    <p>
                      La présente politique relative à la confidentialité et aux cookies (« Politique de Confidentialité ») décrit
                      les données utilisées sur l’application mobile Sindoor qui peut être téléchargée sur internet (l’ « App »).
                    </p>
                    <p>
                      Le responsable du traitement de vos données est Sindoor, basée à Paris, en France (« Sindoor », « nous », «
                      nos/notre »). Vous pouvez nous contacter en nous écrivant sur notre Application ou nous contactant par voie
                      postale à notre siège basée à Paris, en France. Sindoor partage vos informations personnelles avec d'autres
                      entités de son groupe (les « Sociétés du Groupe ») aux fins décrites dans cette publication. Les Sociétés du
                      Groupe traitent également, si nécessaire, aux fins décrites dans cette publication vos données personnelles
                      en tant que responsables du traitement. Les Sociétés du Groupe sont listées avec leurs coordonnées dans la
                      section de la Politique de Confidentialité intitulée « Partage d'informations personnelles avec des tiers»
                    </p>
                    <p>
                      Nous nous engageons à protéger la confidentialité de nos utilisateurs et de nos clients. La présente
                      Politique de Confidentialité est destinée à vous informer de la manière dont nous recueillons, définissons
                      et utilisons les données qui pourraient permettre de vous identifier, telles que votre nom, votre adresse
                      électronique, votre adresse postale, vos autres coordonnées ou identifiants en ligne et autres informations
                      que vous nous communiquez lorsque vous utilisez la Plateforme (« Données Personnelles »), ainsi que des
                      Cookies que nous utilisons. Prenez le temps de lire attentivement la présente Politique de Confidentialité.
                    </p>
                    <h6>Quelles Données Personnelles collectons-nous ?</h6>
                    <p>
                      Lorsque vous visitez et/ou utilisez notre Plateforme ou lorsque vous nous contactez, nous pouvons collecter
                      les données suivantes :
                    </p>
                    <ul>
                      <li className="listStyleType">
                        Données Personnelles que vous décidez de nous communiquer lorsque vous créez un compte, lorsque vous vous
                        abonnez à des courriels, newsletters ou alertes, et que vous nous communiquez lorsque vous faites appel à
                        nos services, et notamment les informations saisies sur notre plateforme de réservation ou incluses dans
                        vos commentaires, avis et réponses à nos enquêtes de satisfaction. En faisant une réservation ou en nous
                        laissant un commentaire, vous pouvez nous communiquer volontairement des données à caractère personnel
                        sensibles si le service que vous demandez ou que vous évaluez le nécessite (concernant votre santé ou
                        appartenance ethnique, par exemple).
                      </li>
                      <li className="listStyleType">
                        Les données personnelles que vous nous communiquez dans le cadre d’une candidature pour un poste chez
                        Sindoor, adressées soit de manière directe sur l’Application, soit de manière indirecte, incluant mais
                        sans y être limité, via une agence de recrutement, une candidature spontanée ou une plateforme de
                        recrutement tierce. Lors d’une candidature vous pouvez choisir de nous fournir volontairement des données
                        personnelles sensibles pour que des ajustements raisonnables puissent être faits pour vous dans le
                        processus de recrutement ou ultérieurement si une relation professionnelle est établie. Toutefois, vous ne
                        devez pas nous communiquer de données personnelles sensibles qui ne seraient pas nécessaires pour procéder
                        à des ajustements raisonnables, comme par exemple, des opinions politiques, des croyances religieuses ou
                        des informations spécifiques sur votre état de santé.
                      </li>
                      <li className="listStyleType">
                        Dans le cas où vous utilisez notre service de paiement en ligne, nous pouvons stocker (nous-mêmes ou le
                        système de paiement que nous avons désigné) votre numéro de carte de crédit et de débit sous forme cryptée
                        sécurisée.
                      </li>
                      <li className="listStyleType">
                        Si vous décidez de communiquer avec nous (par exemple, par l’intermédiaire de la Plateforme, par courriel,
                        téléphone, SMS ou sur les médias sociaux), nous enregistrons le fait que vous nous avez contactés et
                        pouvons conserver le contenu de votre communication, ainsi que vos coordonnées et nos réponses.
                      </li>
                      <li className="listStyleType">
                        Informations relatives à vos visites sur la plateforme et à votre utilisation, telles que les informations
                        relatives à l’appareil et au navigateur que vous utilisez, votre adresse IP et votre emplacement
                        géographique, votre identifiant IDFA (identifier for advertisers), la date et l’heure de votre visite, la
                        durée de votre visite, la source qui vous a adressé(e) à nous et les sites Internet consultés avant votre
                        visite et vos interactions sur la Plateforme, y compris les prestations et événements qui vous
                        intéressent. Nous attirons votre attention sur le fait que nous pouvons associer ces informations à votre
                        compte Sindoor. Pour en savoir plus sur les finalités pour lesquelles nous collectons et utilisons ces
                        informations, veuillez consulter la section Cookies de la présente Politique de Confidentialité.
                      </li>
                    </ul>
                    <p>
                      Il est important que toutes les Données Personnelles que vous nous communiquez lorsque vous vous inscrivez
                      en tant qu’utilisateur ou lorsque vous utilisez la Plateforme d’une autre manière soient exactes et
                      précises. Cela implique, par exemple, que vous veilliez à ce que nous ayons toujours vos coordonnées exactes
                      (y compris votre adresse électronique). Si vous comptez nous communiquer les Données Personnelles d’une
                      autre personne, par exemple lorsque vous faites une réservation pour le compte de celle-ci, vous ne devez
                      nous communiquer les informations de cette personne qu’avec son accord et après que celle-ci ait eu la
                      possibilité de s’informer de la manière dont nous utiliserons ces informations, y compris des finalités
                      décrites dans la présente Politique de Confidentialité.{" "}
                    </p>
                    <h6>Protéger vos Données Personnelles</h6>
                    <p>
                      La transmission d’informations sur Internet n’est pas totalement sûre. Par conséquent, bien que nous
                      fassions de notre mieux pour protéger vos Données Personnelles, nous ne sommes pas en mesure de garantir la
                      sécurité des données transmises vers notre Plateforme. Leur transmission se fait à vos risques. Après
                      réception de vos Données Personnelles, nous mettrons en œuvre des procédures strictes et des dispositifs de
                      sécurité applicables à ces données.
                    </p>
                    <h6>Comment utilisons-nous vos Données Personnelles ? </h6>
                    <p>
                      En règle générale, nous utilisons les Données Personnelles pour vous fournir les services et les produits
                      que vous demandez, pour traiter les paiements, assurer le service client, présenter notre contenu et les
                      publicités que nous estimons pouvoir vous intéresser, à des fins d’analyse de la clientèle, pour vous
                      envoyer des courriels marketing et promotionnels et pour vous informer des modifications importantes
                      relatives à notre Plateforme. Nous utilisons également vos Données Personnelles :{" "}
                    </p>
                    <ul>
                      <li className="listStyleType">
                        Pour exécuter un contrat ou prendre des mesures liées à un contrat. C’est le cas lorsque vous demander un
                        service via Sindoor. Cela inclut de :
                        <ul>
                          <li className="listStyleType">
                            Vous envoyer des informations sur les services demandés (tels que les rappels de rendez-vous) par
                            courriel, SMS et notification push
                          </li>
                          <li className="listStyleType">Faciliter vos réservations et procéder au paiement</li>
                          <li className="listStyleType">Répondre à vos questions et préoccupations </li>
                          <li className="listStyleType">Gérer votre compte </li>
                        </ul>
                      </li>
                      <li className="listStyleType">
                        Dès lors que Sindoor l’estime nécessaire pour exercer ses activités et poursuivre ses intérêts légitimes,
                        et en particulier :
                        <ul>
                          <li className="listStyleType">
                            pour préserver la sécurité de notre Plateforme et de nos systèmes et empêcher la fraude, les incidents
                            liés à la sécurité et autres crimes
                          </li>
                          <li className="listStyleType">
                            pour vérifier la conformité à nos conditions générales et pour constater, exercer ou défendre un droit
                            en justice
                          </li>
                          <li className="listStyleType">
                            pour vous informer des nouveaux services de Sindoor et des offres spéciales que nous estimons
                            susceptibles de vous intéresser, par exemple par courriel et par l’affichage de publicités sur les
                            sites Internet tiers tels que Facebook (dans le cas où le consentement n’est pas requis)
                          </li>
                          <li className="listStyleType">
                            Pour adapter et personnaliser les notifications marketing et la publicité qui vous sont destinées,
                            ainsi qu’à des tiers, d’après les informations que vous communiquez et d’après la manière dont vous
                            utilisez notre Plateforme, nos produits et services et les autres sites (pour en savoir plus, veuillez
                            consulter la section Cookies de la présente Politique de Confidentialité)
                          </li>
                          <li className="listStyleType">
                            pour nous aider à contrôler, à améliorer et à protéger notre Plateforme, nos produits et nos services,
                            et pour personnaliser notre Plateforme, nos produits et nos services (et ceux de nos Prestataires)
                            pour vous, d’après les informations que vous communiquez et la manière dont vous utilisez notre
                            Plateforme, nos produits et nos services ainsi que les autres sites (pour en savoir plus, veuillez
                            consulter la section Cookies de la présente Politique de Confidentialité)
                          </li>
                          <li className="listStyleType">
                            pour examiner et répondre à toute question ou réclamation reçue de votre part ou d’autres personnes
                            concernant notre Plateforme ou nos produits ou services
                          </li>
                          <li className="listStyleType">
                            pour réaliser en interne des études et des analyses qui nous permettent de voir la manière dont vous
                            utilisez notre Plateforme, nos produits et nos services et d’évaluer la performance de notre activité
                          </li>
                          <li className="listStyleType">
                            pour réaliser des études de marché et des enquêtes auprès des consommateurs{" "}
                          </li>
                          <li className="listStyleType">
                            pour compiler et publier des avis sur les produits ou services proposés par nos Prestataires, et pour
                            utiliser ces avis dans le cadre de campagnes publicitaires
                          </li>
                          <li className="listStyleType">
                            Afin de traiter les candidatures pour un poste au sein de Sindoor, qu'elles soient soumises soit de
                            manière directe ou indirecte, notamment pour vérifier vos aptitudes pour le poste, votre curriculum
                            vitae et vos compétences professionnelles, pour programmer des entretiens et des évaluations, pour
                            contacter vos références et, en cas de succès, vous proposer un emploi et construire une relation de
                            travail avec vous. Les informations que vous fournirez pourront être conservées pendant une période de
                            12 mois et pourront être mentionnées lors de futures candidatures pour un poste au sein de Sindoor. Si
                            toutefois vous souhaitez supprimer lesdites données, vous êtes libre de le faire à tout moment en
                            suivant le lien dans l'email de confirmation que nous vous enverrons suite à la réception de votre
                            candidature.
                          </li>
                        </ul>
                      </li>
                      <li className="listStyleType">
                        <span className="spanText"> dans le cas où vous nous donnez votre consentement </span>
                        <ul>
                          <li className="listStyleType">
                            pour vous informer des nouveaux services de Sindoor et des offres spéciales que nous estimons
                            susceptibles de vous intéresser, par exemple par courriel et par l’affichage de publicités sur les
                            sites Internet tiers tels que Facebook (dans le cas où votre consentement est requis)
                          </li>
                          <li className="listStyleType">
                            pour vous envoyer des informations sur les concours et enquêtes et sur les modalités des offres
                            promotionnelles de nos Prestataires et sur les produits ou services d’autres tiers sélectionnés, par
                            exemple des produits ou services de marques dans les domaines de la santé, de la beauté, des loisirs
                            et du style de vie, par courriel et sous la forme de notifications push via l’App
                          </li>
                          <li className="listStyleType">
                            pour transmettre vos Données Personnelles à nos Prestataires et à d’autres tiers sélectionnés, par
                            exemple des marques de produits pour la santé, la beauté, les loisirs et le style de vie, afin de leur
                            permettre de vous envoyer, en leur propre nom, des informations sur leurs produits et services{" "}
                          </li>
                          <li className="listStyleType">
                            pour déposer des cookies et utiliser des technologies similaires comme indiqué dans la section Cookies
                            de la présente Politique de Confidentialité et dans les informations qui vous sont communiquées
                            lorsque ces technologies sont utilisées{" "}
                          </li>
                          <li className="listStyleType">
                            lorsque vous appelez notre Service Client, votre appel peut être enregistré à des fins de formation et
                            de contrôle qualité. Vous serez automatiquement prévenu si un tel enregistrement est en cours. Si vous
                            ne souhaitez pas que votre appel soit enregistré, indiquez votre choix lorsque l’option vous sera
                            proposée. Si toutefois vous ne vous prononcez pas lorsque cette option vous sera proposée, nous
                            considérerons votre consentement tacite.
                          </li>
                          <li className="listStyleType">
                            En d’autres occasions où nous vous demanderons votre consentement, nous utiliserons ces données aux
                            fins que nous vous expliquerons à ce moment-là
                          </li>
                        </ul>
                      </li>
                      <li className="listStyleType">
                        <span className="spanText"> aux fins qui sont exigées par la loi : </span>
                        <ul>
                          <li className="listStyleType">
                            pour répondre aux demandes des pouvoirs publics ou d’autorités chargées de l’application de la loi
                            dans le cadre d’une enquête
                          </li>
                          <li className="listStyleType">pour remplir des obligations légales, réglementaires et de conformité</li>
                        </ul>
                      </li>
                    </ul>
                    <h6 style={{ marginTop: "2%" }}>Tests comparatifs des intérêts légitimes’</h6>
                    <p>
                      Nous avons effectué des tests de mise en balance pour tous les traitements de données que nous effectuons
                      sur la base de nos intérêts légitimes que nous avons décrits ci- dessus. Vous pouvez obtenir des
                      renseignements sur l'un ou l'autre de nos tests comparatifs en nous contactant sur notre Application.
                    </p>
                    <h6>Retirer votre consentement ou vous opposer au marketing direct’ </h6>
                    <p>
                      Lorsque nous nous reposons sur votre consentement pour traiter vos Données Personnelles, vous aurez toujours
                      la faculté de retirer ce consentement, bien que nous puissions avoir d’autres motifs légaux pour traiter vos
                      données à d’autres fins, telles que ceux qui sont décrites ci-dessus. Dans certains cas, nous pouvons vous
                      envoyer des messages de marketing direct sans votre consentement en invoquant nos intérêts légitimes. Vous
                      avez un droit absolu de refuser le marketing direct à tout moment. Vous pouvez le faire en suivant les
                      instructions qui figurent dans e message envoyé dans le cas d’un message électronique, ou en nous contactant
                      comme indiqué ci-dessous.
                    </p>
                    <ul>
                      <li className="listStyleType">
                        Si vous souhaitez ne plus recevoir de communications envoyées par Sindoor, vous pouvez cliquer sur le
                        bouton « se désabonner » en bas du courriel que nous vous envoyons ou encore nous contacter sur notre
                        Application. Dans le cas des messages marketing adressés par courriel, veuillez nous laisser un délai de
                        48 heures ouvrées pour que votre adresse électronique soit retirée de notre système.
                      </li>
                      <li className="listStyleType">
                        Si vous souhaitez ne plus recevoir de communications envoyées par des Prestataires et d’autres tiers,
                        veuillez contacter le Prestataire ou le tiers en question directement. Dans le cas de nos Prestataires, si
                        vous avez besoin de notre aide pour cela, nous serons heureux de faire notre possible pour vous aider.
                      </li>
                      <li className="listStyleType">
                        Si vous souhaitez ne plus recevoir de notifications push via l’App, vous pouvez désactiver l’autorisation
                        des notifications pour l’App dans les paramètres du système d’exploitation de votre téléphone.
                      </li>
                    </ul>
                    <p style={{ marginTop: "1%" }}>
                      Veuillez noter que, si vous avez choisi de ne pas recevoir nos e-mails de communications marketing par
                      l’intermédiaire des méthodes décrites ci-dessus, vous pouvez toujours voir nos publicités non ciblées
                      lorsque vous êtes en ligne si vos préférences publicitaires sur Facebook sont alignées sur un segment
                      d'audience (prédéfini par Facebook) auquel notre entreprise est également associée. Nous ne contrôlons pas
                      l’affichage de ces annonces.{" "}
                    </p>
                    <h6>Partager des Données Personnelles avec des tiers </h6>
                    <p>
                      Nous prenons la sécurité et la méthode de traitement de vos Données Personnelles très au sérieux et nous ne
                      vendrons jamais vos Données Personnelles, en aucune circonstance. Toutefois, nous pouvons communiquer vos
                      Données Personnelles à des tiers sélectionnés, notamment dans les cas suivants :
                    </p>
                    <ul>
                      <li className="listStyleType">
                        à l’une des sociétés de notre Groupe aux fins identifiées dans la présente Politique de Confidentialité.
                        Voici la liste des entités locales du Groupe et leur adresse :
                        <ul>
                          <li className="listStyleType">
                            <span className="spanText">
                              Pour l’instant, nous n’avons pas d’entité ou de Groupe autre que celui basé à Paris, en France.
                            </span>
                          </li>
                          <li className="listStyleType">
                            si vous passez une commande ou contactez d’une autre manière Sindoor via un site Internet ou une App
                            fournie pour le compte d’un tiers, alors vos coordonnées et les informations relatives à votre
                            commande seront transmises au tiers en question. Si vous donnez à un tiers les consentements
                            nécessaires, ce tiers pourra lui aussi vous envoyer des communications marketing.
                          </li>
                          <li className="listStyleType">
                            à des prestataires de services tiers qui remplissent en notre nom des fonctions en lien avec la
                            Plateforme ou encore avec la gestion de notre entreprise, le recrutement de candidats et pour la
                            fourniture des services de Sindoor (par exemple, le traitement des paiements par carte de crédit
                            (merci de vous reporter aux paragraphes concernant Stripe et PayPal ci- dessous pour plus
                            d’informations à ce sujet), l’hébergement de sites Internet, la réalisation d’enquêtes et d’études de
                            marché, la fourniture d’analyses des médias sociaux, la fourniture de services de courriels marketing,
                            des outils d’analyse de données et pour gérer les communications avec le service client).
                          </li>
                          <li className="listStyleType">
                            à ceux de nos Prestataires auprès desquels vous réservez des services, que ce soit par l’intermédiaire
                            de notre App, dans le cas où nous intervenons en qualité d’agent commercial de réservation, ou
                            directement auprès du Prestataire via la Plateforme ou les Widgets de notre Prestataire dans le cas où
                            nous intervenons uniquement en qualité de fournisseur de technologie. Vos informations sont
                            communiquées aux Prestataires afin que :
                            <ul>
                              <li className="listStyleType">
                                les réservations puissent être facilitées et, si nécessaire, une prise de contact puisse être
                                effectuée avant votre rendez-vous ;
                              </li>

                              <li className="listStyleType">
                                si vous avez choisi de recevoir les courriels marketing des Prestataires auprès desquels vous avez
                                effectué une réservation, les courriels envoyés puissent contenir des informations et des offres
                                spéciales ; et
                              </li>
                              <li className="listStyleType">
                                ils puissent améliorer les services qu’ils proposent à leurs clients et leurs opérations en
                                fournissant des données statistiques, agrégées ou individuelles, concernant les clients
                              </li>
                            </ul>
                          </li>
                          <li className="listStyleType">
                            à des marques tierces avec lesquelles nous collaborons sur des produits, services, concours et
                            campagnes
                          </li>
                          <li className="listStyleType">
                            aux fournisseurs de logiciels tiers pour événements utilisés par nos Prestataires pour garantir que
                            ces solutions logicielles tierces et Connect affichent tous la disponibilité en temps réel pour les
                            clients
                          </li>
                          <li className="listStyleType">
                            aux agences de médias et aux Prestataires annonceurs afin de lancer des campagnes marketing ciblées
                            (pour en savoir plus sur les pratiques liées à la publicité en ligne, consultez la section Cookies de
                            la présente Politique de Confidentialité)
                          </li>
                          <li className="listStyleType">
                            à d’autres tiers afin de faciliter notre activité et d’améliorer nos produits, notre contenu, nos
                            services ou notre publicité et notamment, par exemple, l’envoi de communications par courriel ou la
                            publication d’avis sur nos produits et services ou ceux de nos Prestataires
                          </li>
                          <li className="listStyleType">
                            si nous achetons, vendons ou cédons une activité ou des actifs ou si nous sommes en cessation de
                            paiement, en faillite ou sous administration judiciaire. Si tel était le cas, nous pourrions être dans
                            l’obligation de communiquer vos Données Personnelles au vendeur ou, selon le cas, à l’acquéreur de
                            cette activité ou de ces actifs,
                          </li>
                          <li className="listStyleType">
                            si nous sommes tenus de communiquer ou de partager vos Données Personnelles afin de respecter une
                            obligation légale, de faire valoir ou appliquer nos conditions générales ou d’autres accords ou de
                            protéger les droits, les biens, ou la sécurité de clients ou d’autres personnes. Cela signifie aussi
                            échanger des informations avec d’autres sociétés et organisations à des fins de protection contre la
                            fraude et de réduction du risque de crédit
                          </li>
                          <li className="listStyleType">
                            aux autorités gouvernementales et à d’autres tiers si la loi l’exige ou l’autorise, incluant mais ne
                            se limitant pas, en réponse aux ordonnances des tribunaux. Nous pouvons également communiquer des
                            informations sur les utilisateurs lorsque nous avons des raisons de penser que quelqu’un compromet ou
                            porte préjudice à nos droits ou à nos biens, aux autres utilisateurs de notre Plateforme ou à toute
                            personne à laquelle ces agissements pourraient porter préjudice.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p style={{ marginTop: "1%" }}>
                      À noter : si vous postez des Données Personnelles dans un espace accessible au public de notre Plateforme
                      (tel que les sections commentaires), ces Données peuvent être collectées par des tiers sur lesquels nous
                      n’exerçons aucun contrôle. Nous déclinons toute responsabilité concernant l’utilisation de ces Données par
                      ces tiers.
                    </p>
                    <p style={{ margin: "0" }}>
                      Veillez dans ce cas là à faire preuve de prudence et de diligences avant de communiquer des Données
                      Personnelles qui seront postées dans des espaces publics. Vous devriez également éviter de divulguer dans
                      des espaces publics des Données Personnelles qui pourraient être utilisées pour vous identifier (telles que
                      votre nom, votre âge, votre adresse personnelle ou professionnelle ou le nom de votre employeur).
                    </p>
                    <h6>Stripe</h6>
                    <p>
                      Nous utilisons un processeur de paiement tiers, Stripe, afin de traiter tous les paiements que vous
                      effectuez sur notre App. Sindoor ne conserve pas les données des cartes de crédit mais s’appuie sur Stripe
                      pour cela. Stripe nous communique des informations limitées telles que les quatre derniers chiffres, le pays
                      de délivrance et la date d'expiration. Le traitement de ces données par Stripe est couvert par sa politique
                      de confidentialité qui peut être consultée ici : stripe.com/ privacy
                    </p>
                    <p>
                      Les services de Stripe en Europe sont fournis par une filiale de Stripe, Stripe Payments Europe Limited, une
                      entité établie en Irlande. En fournissant ses services de traitement des paiements, Stripe Payments Europe
                      Limited transfère des données personnelles à Stripe, Inc. aux États-Unis. Pour plus d'informations sur les
                      mesures de protection utilisées lors du transfert de vos informations en dehors de l'Espace économique
                      européen, consultez la section relative à la politique de confidentialité de Stripe intitulée "Transferts
                      internationaux de données".
                    </p>
                    <h6>Transactions Paypal</h6>
                    <p>
                      Veuillez noter que toutes les transactions PayPal sont soumises à la politique de confidentialité de PayPal
                      qui se trouve ici : https://www.paypal.com/ie/webapps/mpp/ua/privacy-full. Veuillez-vous assurer que vous
                      êtes satisfait des termes de la politique de confidentialité de PayPal si vous souhaitez utiliser PayPal
                      pour effectuer des transactions via la Plateforme.
                    </p>
                    <h6>Vos droits concernant vos Données Personnelles</h6>
                    <p>En ce qui concerne les Données Personnelles que nous détenons sur vous, vous avez le droit :</p>
                    <ul>
                      <li className="listStyleType">de nous demander une copie de vos Données Personnelles </li>
                      <li className="listStyleType">
                        de nous demander de rectifier, de supprimer vos Données Personnelles ou d’en limiter le traitement{" "}
                      </li>
                      <li className="listStyleType">
                        de nous demander de vous procurer les Données Personnelles que vous nous avez communiquées dans le cadre
                        d’un contrat ou avec votre consentement sous un format structuré, lisible par une machine et de nous
                        demander de transférer ces Données à une autre organisation{" "}
                      </li>
                      <li className="listStyleType">
                        de vous opposer au traitement de vos Données Personnelles dans certains cas (en particulier dans le cas où
                        nous ne sommes pas tenus de traiter ces données pour remplir une obligation contractuelle ou une
                        obligation légale, ou dans le cas où nous utilisons les données à des fins de marketing direct).{" "}
                      </li>
                    </ul>
                    <p>
                      Si vous ne souhaitez pas être contactés par téléphone, vous pouvez vous inscrire sur la liste d’opposition
                      Bloctel (pour plus d’informations cliquez ici bloctel.gouv.fr. Vous disposez également du droit définir des
                      directives relatives au sort de vos Données Personnelles après votre mort.
                    </p>
                    <p>
                      Dans le premier cas, vous pourrez peut-être être en mesure de voir ou de modifier les informations que vous
                      nous avez communiquées en vous connectant sur votre compte en ligne. Vos droits concernant vos Données
                      Personnelles sont dans certains cas limités. Par exemple, si pour accéder à votre demande, nous devons
                      divulguer des Données Personnelles concernant une autre personne ou si nous avons une obligation légale ou
                      un motif légitime et impérieux, nous pouvons continuer de traiter les Données Personnelles que vous nous
                      avez demandées de supprimer.
                    </p>
                    <p>
                      Vous pouvez également avoir le droit de porter réclamation si vous estimez que vos Données Personnelles ont
                      été mal gérées. Nous vous encourageons à nous contacter en premier lieu mais, dans la mesure où vous
                      bénéficiez de ce droit, vous êtes en droit de vous plaindre directement auprès de l’autorité de protection
                      des données compétente. Si vous souhaitez exercer l’un des droits ci-dessus, contactez-nous sur notre App.
                      Veuillez toutefois noter qu’aucune information financière ne sera communiquée sans vérification.
                    </p>
                    <h6>Qu’en est-il des autres sites Internet liés à notre Plateforme? </h6>
                    <p>
                      Nous déclinons toute responsabilité concernant les pratiques des sites Internet liés à notre plateforme et
                      concernant les informations ou le contenu qu’ils contiennent. Souvent, les liens vers d’autres sites
                      Internet qui sont fournis n’ont d’autre but que de suggérer des sources d’informations sur des thèmes que
                      les utilisateurs de notre Plateforme sont susceptibles de trouver utiles.
                    </p>
                    <p>
                      N’oubliez pas que lorsque vous cliquez sur un lien pour vous rendre depuis notre Plateforme sur un autre
                      site Internet, notre Politique de Confidentialité n’est plus applicable . Votre navigation et vos
                      interactions sur tout autre site Internet, y compris les sites Internet vers lesquels notre Plateforme
                      propose un lien, sont soumises aux règles et politiques de ce site Internet. Veillez à toujours lire ces
                      règles et politiques avant de commencer votre utilisation.{" "}
                    </p>
                    <h6>Médias sociaux et contenu généré par l’utilisateur </h6>
                    <p>
                      Certaines de nos Plateformes permettent aux utilisateurs de soumettre leur propre contenu. N’oubliez pas que
                      tout contenu soumis à l’une de nos Plateformes peut être vu par le public, et vous devez être prudent sur le
                      fait de communiquer certaines Données Personnelles, par exemple des informations financières ou votre
                      adresse, sur ces Plateformes. Nous déclinons toute responsabilité concernant les mesures prises par d’autres
                      individus si vous postez des Données Personnelles sur l’une de nos plateformes de médias sociaux, par
                      exemple Facebook ou Instagram. Veuillez également consulter les politiques en matière de confidentialité et
                      de cookies respectives des plateformes de médias sociaux que vous utilisez.
                    </p>
                    <h6>Modifications de notre Politique de Confidentialité </h6>
                    <p>
                      Si nous modifions nos politiques et procédures en matière de confidentialité, nous publierons ces
                      modifications sur notre Plateforme afin que vous soyez informé(e) des informations que nous collectons, de
                      la manière dont nous les utilisons et des cas dans lesquels nous sommes susceptibles de les communiquer.
                    </p>
                    <h6>Où stockons-nous vos données à caractère personnel ?</h6>
                    <p>
                      Les données que nous collectons vous concernant peuvent être transférées et stockées dans un pays situé en
                      dehors de l’Espace économique européen (EEE), notamment au Royaume-Uni, y compris à des fins de traitement
                      de ces données par des tiers sélectionnés, afin de faciliter la conduite des activités de Sindoor. Il est
                      possible que les pays situés en dehors de l’EEE ne soient pas dotés de lois qui prévoient le même niveau de
                      protection de vos données à caractère personnel que les lois en vigueur dans l’EEE. Si tel est le cas, les
                      données à caractère personnel sont protégées de manière adéquate par des clauses contractuelles types
                      approuvées par la Commission européenne, une certification Privacy Shield appropriée, des règles
                      d'entreprise contraignantes pour les sous-traitants. Une copie du mécanisme pertinent peut être fournie pour
                      votre évaluation sur demande sur notre App.
                    </p>
                    <h6>Conservation des données </h6>
                    <p>
                      Nous conservons vos Données Personnelles aussi longtemps que nécessaire pour mener les activités qui sont
                      décrites dans la présente Politique de Confidentialité ou qui vous sont communiquées, ou encore aussi
                      longtemps que la loi nous y autorise. Par exemple:{" "}
                    </p>
                    <ul>
                      <li className="listStyleType">
                        Dans le cas où vous candidatez à un poste au sein de Sindoor, de manière directe ou indirecte, les
                        informations que vous communiquez seront conservées pendant 12 mois et pourront être consultées si vous
                        postulez à nouveau pour travailler chez Sindoor. Si toutefois vous souhaitez supprimer lesdites données,
                        vous êtes libre de le faire à tout moment en suivant le lien dans l'email de confirmation que nous vous
                        enverrons suite à la réception de votre candidature.{" "}
                      </li>
                      <li className="listStyleType">
                        Lorsque vous nous contactez par téléphone et que vous acceptez d’être enregistré, nous conserverons les
                        enregistrements téléphoniques pendant 90 jours à compter de la date de l’appel.
                      </li>
                    </ul>
                    <h6>Notre politique en matière de cookies </h6>
                    <p>
                      À l’instar des autres sites Internet et applis commerciaux, notre Plateforme fait appel à des technologies
                      classiques telles que les cookies et autres outils similaires, parmi lesquels les journaux de serveur web,
                      les balises, les pixels espions, le stockage local, les identifiants d’appareils et les ID de suivi
                      (collectivement, les « cookies » dans la présente Politique de Confidentialité) pour optimiser votre
                      expérience utilisateur, améliorer notre site et fournir des offres personnalisées sur Sindoor et d'autres
                      sites. Veuillez consulter le tableau ci-dessous pour une répartition en direct des Cookies utilisés sur
                      notre Plateforme.
                    </p>
                    <h6>Liste des cookies</h6>
                    <p>
                      Un cookie est un petit fichier de données (fichier texte) qu’une App, lorsqu'il est consulté par un
                      utilisateur, demande à votre navigateur de stocker sur votre appareil afin de mémoriser des informations
                      vous concernant, telles que vos préférences linguistiques ou informations de connexion. Nous configurons ces
                      cookies appelés cookies internes. Nous utilisons également des cookies tiers, qui sont des cookies d'un
                      domaine différent de celui de l’App que vous consultez, pour nos efforts de publicité et de marketing. Plus
                      concrètement, nous utilisons des cookies et d'autres technologies de suivi selon les finalités suivantes :{" "}
                    </p>
                    <h6>Cookies strictement nécessaires</h6>
                    <p>
                      Ces cookies sont nécessaires au fonctionnement de l’App et ne peuvent pas être désactivés dans nos systèmes.
                      Ils sont généralement établis en tant que réponse à des actions que vous avez effectuées et qui constituent
                      une demande de services, telles que la définition de vos préférences en matière de confidentialité, la
                      connexion ou le remplissage de formulaires. Vous pouvez configurer votre navigateur afin de bloquer ou être
                      informé de l'existence de ces cookies, mais certaines parties de l’App peuvent être affectées. Ces cookies
                      ne stockent aucune information d’identification personnelle.
                    </p>
                    <h6>Cookies de performance </h6>
                    <p>
                      Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic, afin de mesurer et
                      d’améliorer les performances de notre App. Ils nous aident également à identifier les pages les plus / moins
                      visitées et d’évaluer comment les visiteurs naviguent sur l’App. Toutes les informations collectées par ces
                      cookies sont agrégées et donc anonymisées. Si vous n'acceptez pas ces cookies, nous ne serons pas informé de
                      votre visite sur notre site.
                    </p>
                    <h6>Cookies de fonctionnalité </h6>
                    <p>
                      Ces cookies permettent d’améliorer et de personnaliser les fonctionnalités de l’App. Ils peuvent être
                      activés par nos équipes, ou par des tiers dont les services sont utilisés sur les pages de notre App. Si
                      vous n'acceptez pas ces cookies, une partie ou la totalité de ces services risquent de ne pas fonctionner
                      correctement.
                    </p>
                    <h6>Cookies pour une publicité ciblée </h6>
                    <p>
                      Ces cookies peuvent être mis en place au sein de notre App par nos Prestataires publicitaires. Ils peuvent
                      être utilisés par ces sociétés pour établir un profil de vos intérêts et vous proposer des publicités
                      pertinentes sur d'autres sites Web ou Apps. Ils ne stockent pas directement desndonnées personnelles, mais
                      sont basés sur l'identification unique de votre navigateur et de votre appareil Internet. Si vous
                      n'autorisez pas ces cookies, votre publicité sera moins ciblée.
                    </p>
                    <p>
                      Les sociétés tierces auxquelles nous faisons appel à des fins de ciblage et de publicité ont leur propre
                      politique de confidentialité que vous devriez lire en détail.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="card card-body mb-1">
          <div className="tittle filetittle">
          <span className={showFileInfo4 ? "order-color": "order"}>4</span>
          <div className="justifySpace" >
          <div className="titleHeading" >
            <h4> Conditions commerciales entre Sindoor et le Prestataire</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo4: !this.state.showFileInfo4 })}
                className={this.state.showFileInfo4 ? "fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
            </div>
          </div>
          {showFileInfo4 ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div
                  className="subtittle"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                >
                  <div>
                    <h4>4 — Conditions commerciales entre Sindoor et le Prestataire</h4>
                    <p style={{ fontWeight: "600", fontStyle: "italic" }}>
                      En raison de la pandémie de COVID-19, les conditions générales de partenariat ainsi que les horaires
                      d’ouverture de notre assistance clients peuvent être modifiés. Merci pour votre patience.{" "}
                    </p>
                    <h6>RÉSUMÉ</h6>
                    <p>
                      Le présent document est un résumé de nos Conditions commerciales Prestataire. Il ne doit pas remplacer la
                      lecture de la version complète ci-dessous. Les termes commençant par une majuscule utilisés dans le présent
                      résumé sont définis dans les Conditions commerciales Prestataire.
                    </p>
                    <ul>
                      <li>Sindoor met à disposition :</li>
                      <li>
                        une plateforme de réservation sur laquelle vous pouvez faire de la publicité pour les Services du
                        Prestataire que vous proposez dans le cadre événementiel à destination d'un éventail plus large de clients
                        potentiels.
                      </li>
                      <li>
                        un système de gestion et d'agenda événementiel qui offre une large gamme de fonctions qui vous aidera à
                        gérer votre événement.
                      </li>
                      <li>
                        des fonctionnalités et services complémentaires mettant en avant les prestataires et leurs prestations.
                      </li>
                      <li>
                        Vous pouvez choisir de recevoir une partie ou la totalité des Services Sindoor ci-dessus. Si vous
                        choisissez de ne pas recevoir tous les Services Sindoor, certaines conditions contenues dans les
                        Conditions commerciales Prestataire ne vous concernent pas. Par exemple, si les services que vous recevez
                        de Sindoor n'incluent pas la plateforme de réservation, les conditions concernant les Réservations (à
                        l'exclusion des Réservations Widget), les Commissions et toute autre condition ne s'appliquant qu'à la
                        plateforme de réservation ne vous concernent pas.
                      </li>
                      <li>
                        Nous sommes chargés de l'organisation et de la conclusion des Réservations Sindoor et des Réservations
                        Widget Prépayées, et nous sommes, pour ce faire, nommés agent commercial pour votre compte conformément
                        aux présentes Conditions commerciales.
                      </li>
                      <li>
                        Pour les Réservations Widget Prépayées et les Réservations Sindoor, nous percevrons les règlements auprès
                        des Clients Widget Prépayés et/ou des Clients Sindoor en votre nom et la bonne réception par nos soins des
                        règlements apurera leur dette à votre égard.
                      </li>
                      <li>
                        Si nous vous devons quelque chose, nous ferons un règlement sur votre compte bancaire dans les 3 à 5 Jours
                        Ouvrables suivant la date du Relevé de facturation.{" "}
                      </li>
                      <li>
                        Si vous nous devez quelque chose, nous effectuerons le paiement du Relevé de facturation en votre nom,
                        conformément à l'autorisation que vous nous aurez donnée en acceptant le présent Contrat et en fournissant
                        vos coordonnées dans Connect. Si vous n’avez pas reçu l’autorisation d’effectuer des paiements récurrents,
                        nous vous demandons de nous régler dans les 14 jours suivant la date du Relevé de facturation.
                      </li>
                      <li>
                        Si le solde est réglé, nous expliquerons sur le Relevé de facturation qu'aucune autre action n'est
                        requise. Si vous rencontrez des difficultés pour régler le solde impayé dans les délais requis, veuillez
                        nous contacter dans les meilleurs délais.
                      </li>
                      <li>
                        Afin de s'assurer que tous les paiements sont traités en toute sécurité et en conformité avec la
                        réglementation des paiements, les services de traitement des paiements pour les Prestataires sont fournis
                        par Stripe et sont assujettis à la convention de compte connecté Stripe, qui comprend les modalités de
                        service Stripe (ensemble la « Convention de Services Stripe »). En acceptant ces Conditions commerciales
                        Prestataire et en continuant à utiliser les Services Sindoor, le Prestataire consent à être lié par la
                        Convention de Services Stripe, comme elle pourra être modifiée au fil du temps par Stripe. Sous réserve du
                        consentement à la Convention de Services Stripe, de l'approbation de Stripe pour qu’il devienne un Compte
                        Connecté Stripe et afin que Sindoor puisse offrir les Services Stripe, le Prestataire devra respecter à
                        cette fin certaines autres conditions. Celles-ci sont énoncées à l'article 10 des Conditions commerciales
                        Prestataire.
                      </li>
                      <li>
                        La qualification d'une Réservation Sindoor en Nouvelle Réservation ou une Réservation Répétée (et donc la
                        facturation d'une Commission ou de Frais de traitement) dépend de la date à laquelle le Client a eu un
                        Rendez-vous Réussi (cf. définition ci-après) en dernier dans le salon du Prestataire et s'il existe dans
                        la Base de données clients, et dans ce cas, quand il a été créé dans la Base de données clients. Un Client
                        sera identifié en utilisant (1) son adresse courriel ou (2) son numéro de téléphone avec son prénom.{" "}
                      </li>
                      <li>
                        Vous êtes responsable des Services du Prestataire que vous fournissez aux Clients et le contrat relatif à
                        ces Services du Prestataire est conclu entre vous et le Client. Nous ne sommes en aucun cas responsable
                        vis-à-vis des Clients pour les Services du Prestataire que vous leur fournirez.
                      </li>
                      <li>
                        Vous avez certaines obligations à l'égard de Sindoor en contrepartie de l'obtention des Services Sindoor.
                        Celles-ci sont indiquées en détail dans les Conditions commerciales Prestataire mais celles qui suivent
                        sont importantes :
                      </li>
                      <li>
                        Vous vous engagez à nous payer toutes les Charges dues (telles que les Frais de services, la Commission,
                        les Frais d’abonnement mensuel, etc.) et vous autorisez par les présentes Sindoor à effectuer le paiement
                        des Frais d'inscription et de tout Relevé de facturation en votre nom. Services soumis à refacturation -
                        Conformément à l’article 196 de la directive du Conseil 2006/112/EC, la TVA sur ce service est due par le
                        bénéficiaire du service. Par conséquent, il est nécessaire que vous nous fournissiez votre numéro de TVA.{" "}
                      </li>
                      <li>
                        Vous vous engagez à ne pas inviter les Clients Sindoor ou les Clients Widget à faire des Réservations
                        autrement que par l’intermédiaire de l’Application. Une telle sollicitation des Clients Sindoor pourrait
                        entraîner inévitablement une augmentation des Charges car nous comptons sur le travail en partenariat avec
                        nos Prestataires et leur utilisation en toute bonne foi des Services Sindoor.
                      </li>
                      <li>
                        Vous vous engagez à traiter et fournir les Services du Prestataire conformément aux normes les plus
                        élevées en vigueur dans le secteur.
                      </li>
                      <li>
                        Vous devez, à tout moment, fournir les Services du Prestataire sur l’App, à un prix précis conforme aux
                        prix les plus compétitifs sur le propre site internet du Prestataire. Pour éviter toute ambiguïté, le
                        Prestataire est autorisé à proposer des prix plus bas ou des offres spéciales à un groupe fermé de
                        personnes, en ligne ou hors ligne, comme par exemple des membres du programme de fidélité du Prestataire,
                        directement dans les événements du Prestataire et sur d'autres plateformes de vente. Des prix différents
                        sur votre site web par rapport aux prix affichés sur l’Application créeraient une mauvaise expérience
                        client et n’est pas conforme au partenariat Sindoor. Cela pourrait également entraîner une augmentation
                        inévitable des Charges.
                      </li>
                      <li>
                        Vous devez vous assurer que vous avez toutes les licences, autorisations, permissions, qualifications,
                        prérogatives et assurances dont vous avez besoin pour fournir les Services du Prestataire.
                      </li>
                      <li>
                        Vous devez vous assurer que vos dénomination et adresse commerciales puissent être clairement vues par les
                        Clients concernant tous les Services Sindoor que vous utilisez et qui sont visibles pour les Clients.
                      </li>
                      <li>
                        Vous devez vous assurer que tout Contenu du Prestataire téléchargé sur votre(vos) Page(s) soit exact,
                        conforme aux lois et ne soit pas trompeur.
                      </li>
                      <li>
                        Vos conditions d'annulation et de report, pour les Réservations Widget Prépayées et les Réservations
                        Sindoor, doivent être conformes à nos Conditions générales de Réservation et à la clause 6 de la version
                        complète des Conditions commerciales Prestataire. Les Clients doivent notamment être autorisés à demander
                        le report d’une Réservation Sindoor ou d’une Réservation Widget Prépayée jusqu'à 1 heure avant l'heure du
                        rendez-vous ainsi que l’annulation jusqu’à 24 heures avant l’heure du rendez-vous.
                      </li>
                      <li>
                        Si nous avons besoin de vous contacter concernant les Réservations ou pour toute autre raison relative aux
                        Services Sindoor, nous pouvons vous contacter ou par email, téléphone, SMS ou WhatsApp, en utilisant les
                        coordonnées que vous avez fournies dans l’Application.
                      </li>
                      <li>
                        Aucun des produits ou services qui leurs sont propres ne sont offerts, ni par Sindoor, ni par une
                        quelconque entreprise qu’elle contrôle via les Services Sindoor P2B. En fournissant les Services Sindoor
                        P2B, Sindoor agit uniquement en qualité de place de marché pour nos Prestataires concernant les Services
                        de leur Prestataire.
                      </li>
                      <li>
                        L’ordre d’apparition de la liste des Prestataires lors des recherches des Clients sur le Site Internet ou
                        l’Application dépend d’un certain nombre de facteurs. Consultez l’Article 16 des conditions générales pour
                        obtenir de plus amples informations.
                      </li>
                      <li>
                        Si vous souhaitez faire une réclamation concernant Sindoor, ou pour toute question, veuillez contacter
                        notre équipe et nous serons ravis de vous aider : contactez-nous si vous voulez nous parler, directement
                        via l’Application ou par voie postale à l’adresse de notre siège situé à Paris, en France.
                      </li>
                      <p>
                        Si vous souhaitez faire une réclamation concernant spécifiquement les Services P2B Sindoor, Vous trouverez
                        les informations sur notre procédure de réclamations et les coordonnées du médiateur concernant les
                        Services P2B Sindoor uniquement à l’article 8 des conditions générales ci-après.
                      </p>
                    </ul>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h6 style={{ textDecoration: "underline" }}>VERSION COMPLÈTE </h6>
                    </div>
                    <p style={{ fontWeight: "600" }}>
                      Lisez attentivement les présentes Conditions commerciales Prestataire (ainsi que les Conditions générales de
                      réservation) avant de commencer à utiliser les Services Sindoor dans la mesure où celles-ci s'appliqueront à
                      votre relation avec Sindoor. Nous vous recommandons d'imprimer un exemplaire des présentes Conditions
                      commerciales Prestataire pour les consulter ultérieurement. Si vous n'acceptez pas les présentes Conditions
                      commerciales Prestataire, vous ne pouvez pas utiliser les services Sindoor.
                    </p>
                    <ul>
                      <li>
                        <h6>Définitions</h6>
                        <ul>
                          <li>
                            « Affilié » désigne toute entité qui, de temps en temps, par rapport à Sindoor, contrôle directement
                            ou indirectement, est contrôlée par, ou est soumise à un contrôle commun à Sindoor ;
                          </li>
                          <li>« App » signifie l’application de réservation sur la plateforme Sindoor sur Android ou IOS ; </li>
                          <li>« Base de données clients » désigne la base de données des clients du Prestataire ;</li>
                          <li>« Charges » désigne la Commission et les Frais ; </li>
                          <li>« Client » désigne toute personne qui achète ou reçoit les Services du Prestataire via l’App ;</li>
                          <li>
                            « Client correspondant » désigne le Client dont l'adresse courriel ou le numéro de téléphone ainsi que
                            le prénom correspondent à plus d'un Client dans la Base de données clients ;{" "}
                          </li>
                          <li>
                            « Client Prestataire » désigne un Client qui réserve des Services du Prestataire directement avec le
                            Prestataire et n’utilise pas le Site internet, l’App ou le Widget mais dont les coordonnées sont
                            stockées dans Connect soit dans la Base de données clients soit en ajoutant un Rendez-vous dans
                            Connect ou autre ;
                          </li>
                          <li>« Client Sindoor » désigne un Client qui réserve via le Site internet ou l’App ;</li>
                          <li>
                            « Client Widget » signifie un Client Widget PSP (Paiement Sur Place) ou un Client Widget Prépayé ;{" "}
                          </li>
                          <li>
                            « Client Widget PSP » (Paiement Sur Place) désigne un client qui effectue une Réservation Widget PSP
                            (Paiement Sur Place) ;
                          </li>
                          <li>« Client Widget Prépayé » désigne un client qui effectue une Réservation Widget Prépayée ;</li>
                          <li>
                            « Commission » désigne la commission (+ TVA) due par le Prestataire à Sindoor comme indiqué dans le
                            Contrat de collaboration, calculée sur la base du montant total payable par un Client Sindoor pour une
                            Réservation Sindoor ;{" "}
                          </li>
                          <li>
                            « Compte Connecté Stripe » désigne un Prestataire qui a formulé son accord à la Convention de Services
                            Stripe et reçu l’approbation de Stripe pour recevoir les Services Stripe ;
                          </li>
                          <li>
                            « Conditions générales de réservation » désigne les conditions générales de réservation de Sindoor
                            concernant les Services du Prestataire proposés sur le Site internet ou l’App ;{" "}
                          </li>
                          <li>
                            « Connect » désigne le logiciel « Sindoor Connect » concédé sous licence au Prestataire au titre du
                            présent Contrat en tant que Service Sindoor ;{" "}
                          </li>
                          <li>« Contenu généré par les utilisateurs » a le sens qui lui est donné à la clause 7.5 ;</li>
                          <li>
                            « Contenu du Prestataire » désigne toute information, documentation, matériel, logiciel,
                            photographies, nom de domaine (dans la mesure où il est utilisé pour héberger un Site du Prestataire),
                            thème/skin Site du Prestataire personnalisé ou autre contenu (qui peut contenir le nom, le logo ou
                            tout autre signe distinctif ou des Droits de propriété intellectuelle du Prestataire) qui peut être
                            publié sur la ou les Page(s) conformément au présent Contrat, y compris les Photos du Portfolio
                            Styliste ;
                          </li>
                          <li>
                            « Contrat » ou « Conditions commerciales Prestataire » désigne le présent contrat, ainsi que le
                            Contrat de collaboration et/ou toutes les conditions qui vous sont envoyées par email ou qui vous sont
                            présentées sur la page d'inscription en ligne des Prestataires, qui ensemble définissent les
                            conditions dans lesquelles Sindoor fournit les Services Sindoor au Prestataire et qui entre en vigueur
                            à la Date d'effet ;
                          </li>
                          <li>
                            « Contrat de collaboration » désigne le contrat signé par Sindoor et le Prestataire, ou selon ce qui a
                            été convenu par courriel et/ou sur la page d'inscription en ligne des Prestataires, confirmant
                            l'acceptation du présent Contrat par les deux parties, les Frais d'inscription, la Commission et
                            toutes autres Charges (le cas échéant) ;
                          </li>
                          <li>
                            « Convention de Services Stripe » désigne la convention de compte connecté Stripe, qui inclue les
                            conditions de services Stripe ;{" "}
                          </li>
                          <li>
                            « Date d'effet » désigne la première date à laquelle (a) le Prestataire commence à recevoir les
                            Services Sindoor, (b) la date à laquelle le Prestataire coche la case pour confirmer son acceptation
                            de ce Contrat dans Connect, (c) la date à laquelle le Prestataire s'inscrit pour recevoir les Services
                            Sindoor via la page d'inscription en ligne des Prestataires ou, (d) la date de signature du Contrat de
                            collaboration par le Prestataire pour confirmer son acceptation du présent Contrat ;{" "}
                          </li>
                          <li>
                            « Données du Compte Connecté Stripe » désigne les données concernant les Comptes Connectés Stripe,
                            l’activité sur leurs comptes Stripe et leurs transactions ;{" "}
                          </li>
                          <li>
                            « Droits de propriété intellectuelle » désigne tous les droits de propriété intellectuelle au niveau
                            mondial actuels ou futurs et acquis ou éventuels, y compris, notamment, les droits d'auteur (y compris
                            les droits de traduction en langue étrangère), les droits sur les dessins et modèles, les droits sur
                            les bases de données, les droits sur des noms de domaine, les modèles, brevets, marques, noms
                            commerciaux, signes et autres dénominations déposés, sous réserve que ceux-ci soient exclusifs, ainsi
                            que tous les droits similaires déposés ou non (y compris notamment les prolongations, retours,
                            reprises et renouvellements de ceux- ci). Les droits précités incluent, concernant les droits
                            susceptibles d'être déposés, les demandes faites ou les droits de faire des demandes concernant ces
                            droits ;
                          </li>
                          <li>
                            « Essai gratuit » désigne une période limitée pendant laquelle un Prestataire peut recevoir une partie
                            ou la totalité des Services Sindoor sans frais (à l'exception des Frais de traitement), tel que
                            déterminé par Sindoor et à son entière discrétion. A l'expiration d'un Essai gratuit, le Prestataire
                            sera redevable des Charges prévues dans le Contrat de collaboration ; « Frais » désigne les Frais
                            d'inscription, les Frais de traitement et tous autres frais (+ TVA) dus par le Prestataire pour
                            recevoir les Services Sindoor, tel qu’établi dans le Contrat de collaboration, dans tout addendum à ce
                            Contrat, sur la page d’inscription en ligne des Prestataires et/ou par le biais d’e-mails entre
                            Sindoor et le Prestataire ;{" "}
                          </li>
                          <li>« Frais bancaires » a le sens qui lui est donné à la clause 10.9 ;</li>
                          <li>
                            « Frais de traitement » désigne les frais de traitement (+ TVA) que le Prestataire doit payer à
                            Sindoor sur les Réservations Répétées et les Réservations Widget, tel qu’établi dans le Contrat de
                            collaboration et dont le calcul est basé sur le montant total payable par le Client pour une
                            Réservation Répétée ou une Réservation Widget, selon le cas ;{" "}
                          </li>
                          <li>
                            « Frais d'inscription » désigne les frais non remboursables (+ TVA) facturés par Sindoor au
                            Prestataire lors de l'inscription du Prestataire pour recevoir les Services Sindoor, qui doivent être
                            payés par carte électronique ou comme convenu autrement et tel qu’établi dans le Contrat de
                            collaboration ;{" "}
                          </li>
                          <li>« Incident de Sécurité » a le sens qui lui est donné à la clause 9.3 ; </li>
                          <li>« Informations Confidentielles » a le sens qui lui est donné à la clause 13.1 ; </li>
                          <li>
                            « Jour Ouvrable » désigne un jour autre qu'un samedi, un dimanche ou un jour férié en France où les
                            banques sont ouvertes ;{" "}
                          </li>
                          <li>
                            « Législation relative à la protection des données » désigne la LPD, les règlementations en matière de
                            vie privée et de communications électroniques, le Règlement Général sur la Protection des Données et
                            toute législation et/ou réglementation exécutant ou édictées en vertu de ces dernières, ou qui amende,
                            remplace, promulgue ou consolide l’une d’entre elles (en ce compris le Règlement général sur la
                            protection des données), et toutes les autres lois et règlementations applicables y compris le futur
                            Règlement général sur la protection des données (« RGPD »), concernant le traitement des données à
                            caractère personnel et la vie privée qui peuvent exister dans n’importe quelle juridiction pertinente,
                            telles que la Directive e-Privacy ;{" "}
                          </li>
                          <li>
                            « Lookbook Sindoor » désigne l’inventaire d’images, incluant, mais sans s’y limiter, les Photos du
                            Portfolio Styliste, pouvant être affichées sur le Site Internet, l’Application, le Site Prestataire,
                            le Widget, les pages des réseaux sociaux de Sindoor, et/ou les Réseaux de Distribution et qui sont
                            accessibles aux utilisateurs à titre de source d’inspiration et qui peuvent permettre à l’occasion à
                            un Client de réserver les Services Prestataire liés à une image ;{" "}
                          </li>
                          <li>
                            « Logiciel Sindoor PDV » désigne le module « point de vente » entièrement intégré dans Connect ;
                          </li>
                          <li>
                            « LPD » désigne la loi belge relative à la protection des données du 8 décembre 1992, LPD au sens de
                            Sindoor fait également référence à la loi belge équivalente en France;
                          </li>
                          <li>
                            « Manquement grave » désigne un manquement (y compris un manquement anticipé) dont les conséquences ne
                            sont pas minimes ou insignifiantes pour Sindoor, y compris notamment un manquement aux clauses 6.1,
                            6.2, 6.5, 6.6, 6.10, 6.15, 6.16, 6.17, 6.18, 7.5, 8, 9.5 et/ou 10. Pour décider si un manquement est
                            grave, il n'est pas tenu compte du fait qu’il intervient par accident, incident, erreur ou malentendu
                            ;
                          </li>
                          <li>« Matériel en prêt » a le sens qui lui est donné à la clause 5.9 ;</li>
                          <li>
                            « Matériel Sindoor PDV » désigne le matériel accompagnant le logiciel Sindoor PDV susceptible
                            d’inclure un tiroir-caisse avec imprimante de tickets intégrée (Star Micronics mPOP), dont les détails
                            seront précisés dans le Contrat de collaboration ;{" "}
                          </li>
                          <li>« Notification de changement des tarifs » a le sens qui lui est donné à la clause 2.5 ;</li>
                          <li>« Nouvelle Réservation » a le sens qui lui est donné à la clause 2.7 ;</li>
                          <li>
                            « Page(s) » désigne la ou les page(s) internet et les contenus de la section affectée au Prestataire
                            sur le Site internet ou l’Application (y compris la page d'accueil Sindoor du Prestataire et chaque
                            page relative aux Services du Prestataire proposés sur le Site internet) ainsi que toute page et tout
                            contenu du ou des site(s) internet du Prestataire ou d'autres sites internet sur lesquels le Widget
                            est utilisé, en ce compris tout Site du Prestataire ;
                          </li>
                          <li>« P2B » a la même signification que « Règlement Platform to Business » défini ci-dessous ;</li>
                          <li>
                            « Prestataire » vous désignant, le salon ou le spa, qui concluez le Contrat avec Sindoor à la Date
                            d’effet, agissant en nom propre et au nom de tous ses employés et prestataires ;
                          </li>
                          <li>« Photos » a le sens qui lui est donné à la clause 4.1 ;</li>
                          <li>« Photos du Portfolio Styliste » a le sens qui lui est donné à la clause 6.6 ; </li>
                          <li>
                            « Photographe de Sindoor » désigne un photographe indépendant dont les services sont sous-traités par
                            Sindoor et auquel Sindoor peut demander de fournir le Service de Photographie à un Prestataire ;
                          </li>
                          <li>« Plateforme des tierces parties » a le sens qui lui est donné à la clause 10.3 ; </li>
                          <li>« Réclamation » a le sens attribué à ce terme à l’article 8.1 ; </li>
                          <li>
                            « Règlement général sur la protection des données » ou « RGPD » désigne le Règlement (UE) 2016/679 et
                            toute législation et/ou réglementation mise en œuvre ou promulguée en vertu de celui-ci, ou qui le
                            modifie, remplace, reformule ou consolide à l’occasion ;{" "}
                          </li>
                          <li>
                            « Règlement Platform to Business » ou « P2B » désigne le Règlement (UE) 2019/1150 et toute législation
                            et/ou réglementation mise en œuvre ou promulguée en vertu de celui-ci, ou qui le modifie, remplace,
                            reformule ou consolide à l’occasion ;
                          </li>
                          <li>
                            « Rendez-vous Réussi » désigne un rendez-vous dans Connect (soit via une Réservation Sindoor, une
                            Réservation Widget ou une Réservation faite directement auprès du Prestataire) pour lequel le
                            Prestataire a fourni les Services du Prestataire au Client ;{" "}
                          </li>
                          <li>
                            « Réseaux de Distribution » désigne le site internet d'un tiers ou autre support par l'intermédiaire
                            desquels les Services Prestataire sont fournis ou annoncés aux Clients ou Clients Potentiels via les
                            Services P2B Sindoor, incluant les Plateformes Tierces, Instagram, Facebook, Reserve with Google,
                            Lastminute.com, YouTube, GoogleAds, les Réseaux Google Display et les réseaux affiliés (chacun à
                            l’occasion et dans la mesure applicable;{" "}
                          </li>
                          <li>
                            « Réservation » désigne toute Réservation faite par un Client pour n’importe quel Service du
                            Prestataire, qu’elle soit réalisée via le Site internet, , l’Application, le Site Prestataire, l’App,
                            ou le Widget, en ce compris mais n’étant pas limité aux Réservations Sindoor et aux Réservations
                            Widget ;
                          </li>
                          <li>« Nouvelle Réservation » a le sens qui lui est donné à la clause 2.7 ;</li>
                          <li>
                            « Réservation Réalisée » désigne une Réservation pour laquelle le Prestataire a fourni les Services du
                            Prestataire au Client ;{" "}
                          </li>
                          <li>
                            « Réservation Répétée » désigne une Réservation Sindoor qui n'est pas couverte par la définition de
                            Nouvelle Réservation indiquée à la clause 2.7 ;{" "}
                          </li>
                          <li>
                            « Réservation Sindoor » signifie une réservation faite sur le Site internet ou l’App pour laquelle le
                            Client choisit, au moment de faire la réservation, une date et/ou une heure à laquelle il souhaite
                            recevoir ces Services du Prestataire (en ce compris quand l’option « Paiement sur place » est
                            utilisée) ;
                          </li>
                          <li>
                            « Réservation Widget » désigne une Réservation Widget Prépayée ou une Réservation Widget PSP (Paiement
                            sur Place) ;
                          </li>
                          <li>
                            « Réservation Widget Prépayée » désigne une réservation faite sur le Widget, qui est payée en ligne
                            par le Client Widget, à Sindoor, au moment de la réservation ;{" "}
                          </li>
                          <li>
                            « Réservation Widget PSP » (Paiement Sur Place) désigne une réservation faite sur le Widget qui n’est
                            pas payée en ligne et que le Client et le Prestataire peuvent annuler jusqu’au moment du rendez-vous
                            puisqu’aucun contrat ne se forme entre le Client et le Prestataire jusqu’à ce que le rendez-vous ait
                            lieu ;
                          </li>
                          <li>
                            « Service de Photographie » désigne le service de photographie qui peut être fourni par Sindoor aux
                            Prestataires conformément aux conditions énoncées à la clause 4 du présent Contrat ;{" "}
                          </li>
                          <li>
                            « Services du Prestataire » désigne les produits et services de spa, de beauté, de cheveux et/ou
                            autres que le Prestataire fournit aux Clients dans le cadre de son activité et qui sont commercialisés
                            par le Prestataire auprès des Clients en utilisant les Services Sindoor ;{" "}
                          </li>
                          <li>
                            « Service eCRM » désigne la fonctionnalité de courriel et de marketing postal dans Connect qui peut
                            être proposé comme l'un des Services Sindoor en contrepartie des Frais applicables ;{" "}
                          </li>
                          <li>
                            « Services P2B Sindoor » désigne les services Sindoor lorsque Sindoor agit en qualité d’intermédiaire
                            en ligne entre un Prestataire et un Client, et ceux-ci sont donc soumis au Règlement P2B. Les Services
                            P2B Sindoor incluent le Widget, les Sites Prestataire, le Site Web et l’Application par lesquels les
                            Services Prestataire sont offerts par Sindoor aux Clients au nom d’un Prestataire, mais aucun autre
                            Service Sindoor tel que Connect, le Service de Photographie et de Caisse Sindoor.{" "}
                          </li>
                          <li>
                            « Services Stripe » désigne les services de traitement des paiements fournis par Stripe à Sindoor et
                            les Comptes Connectés Stripe, y compris les services qui permettent l'acceptation des paiements des
                            Clients, l'acheminement des fonds à destination et en provenance des Comptes Connectés Stripe et les
                            versements de fonds en dehors de Stripe ;
                          </li>
                          <li>
                            « Services Sindoor » désigne les avantages et services qu'un Prestataire peut recevoir de Sindoor,
                            tels qu’indiqués sur la page d’inscription en ligne des Prestataires, dans le Contrat de
                            collaboration, tout addendum à ce Contrat et/ou tout e-mail entre Sindoor et le Prestataire, en
                            contrepartie du paiement des Charges à Sindoor (excepté dans le cas d'un Essai gratuit) ;
                          </li>
                          <li>« Site internet » désigne le site internet de Sindoor s’il y a ; </li>
                          <li>
                            « Site du Prestataire » désigne un site personnalisable alimenté par Connect et offert en tant qu’un
                            des Services Sindoor en échange de Frais, et contenant un bouton « Réserver maintenant » connectant
                            les Clients au Widget, hébergé à une adresse sous-domaine sur mySindoor.be ou au choix de Sindoor, sur
                            le domaine propre du Prestataire ;{" "}
                          </li>
                          <li>
                            « Stripe » désigne Stripe Payments Europe Ltd, une société privée à responsabilité limitée organisée
                            selon les lois de l'Irlande et Stripe Payments UK Ltd, une société anglaise, fournissant les Services
                            Stripe à Sindoor et à ses Prestataires (également connus sous le nom de Stripe Connected Accounts) ;{" "}
                          </li>
                          <li>« Tiers indemnisé » a le sens qui lui est donné à la clause 9.8 ;</li>
                          <li>
                            « Sindoor » désigne Sindoor, une société immatriculée en France, dont le siège est situé à Paris;
                          </li>
                          <li>« Sindoor PDV » désigne le Logiciel Sindoor PDV et / ou le Matériel Sindoor PDV ; et </li>
                          <li>
                            « Widget » désigne l’interface internet appartenant à et fournie par Sindoor via Connect comme l’un
                            des Services Sindoor, intégré sur chaque Site du Prestataire et que le Prestataire peut intégrer sur
                            son propre site internet et/ou chaine(s) de réseaux sociaux, et à travers lequel les Clients peuvent
                            faire directement des Réservations Widget avec le Prestataire.{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Services Sindoor </h6>
                        <ul>
                          <li>
                            En contrepartie du paiement des Charges par le Prestataire (excepté dans le cas d'un Essai gratuit) et
                            de l'exécution psar ce dernier de toutes ses autres obligations au titre des présentes et sous réserve
                            du présent Contrat, Sindoor fournit les Services Sindoor applicables au Prestataire qui (sauf accord
                            contraire) incluent une licence personnelle, non exclusive, incessible et pleinement révocable
                            d'utilisation de Connect, dont les conditions sont énoncées à la clause 3.{" "}
                          </li>
                          <li>
                            Concernant toutes les Réservations Widget Prépayées et les Réservations Sindoor, Sindoor agit et est
                            nommé par les présentes en qualité de mandataire du Prestataire pour conclure ces Réservations avec un
                            Client et (le cas échéant) pour percevoir et traiter les paiements pour le compte du Prestataire.
                            Aucune stipulation des présentes n'exclut ou ne limite la responsabilité du Prestataire quant à la
                            fourniture des Services du Prestataire aux Clients. Sindoor est uniquement un fournisseur de
                            technologie en ce qui concerne les Réservations Widget PSP et n’a pas de relation directe avec les
                            Clients Widget en ce qui concerne les Réservations Widget PSP.{" "}
                          </li>
                          <li>
                            Sindoor peut contacter les Prestataires concernant les Réservations ou toute autre question relative
                            aux Services Sindoor et/ou Services du Prestataire, nous pouvons vous contacter par email, téléphone,
                            SMS ou WhatsApp, en utilisant les coordonnées que vous avez fournies dans Connect.{" "}
                          </li>
                          <li>
                            Lorsqu’un Prestataire a choisi de recevoir des Services Sindoor qui engendrent des Frais, et qu’il
                            souhaite cesser de recevoir un ou plusieurs de ces Services Sindoor, le Prestataire doit notifier ceci
                            à Sindoor par écrit au moins 30 jours à l’avance, et restera tenu au paiement de tout Frais applicable
                            pendant la durée du préavis.
                          </li>
                          <li>
                            Sindoor peut, à tout moment et à sa seule discrétion, modifier le montant des Frais et/ou du taux de
                            Commission sur notification de 30 jours au Prestataire (« Notification de changement de tarifs »). Si
                            le Prestataire continue à utiliser les Services Sindoor après réception d'une Notification de
                            changement de tarifs, il sera réputé accepter les nouveaux Frais et/ou taux de Commission.{" "}
                          </li>
                          <li>
                            La qualification d'une Réservation Sindoor en Nouvelle ou Répétée (et donc la facturation d'une
                            Commission ou de Frais de traitement) dépend de la date à laquelle le Client a eu un Rendez-vous
                            Réussi en dernier dans le salon du Prestataire et si le Client existe dans la Base de données clients
                            et dans ce cas quand il a été créé. Un Client sera identifié en utilisant (1) son adresse courriel ou
                            (2) son numéro de téléphone avec son prénom. Les Réservations Widget Prépayées feront toujours l’objet
                            de Frais de traitement, pas de Commission.
                          </li>
                          <li>
                            Une réservation Sindoor sera qualifiée de Nouvelle Réservation si le Client :
                            <ul>
                              <li>n'existe pas du tout dans la Base de données clients ; ou </li>
                              <li>
                                a été créé dans la Base de données clients il y a plus de 365 jours et n'a pas eu de Rendez-vous
                                Réussi dans le salon du Prestataire au cours des derniers 365 jours ; ou{" "}
                              </li>
                              <li>
                                a été créé dans la Base de données clients il y a moins de 365 jours suite à un rendez-vous qui
                                n'a pas été ou n'est pas encore transformé en Rendez- vous Réussi.{" "}
                              </li>
                              <p>Dans tous les autres cas, une Réservation Sindoor sera qualifiée de Réservation Répétée. </p>
                            </ul>
                          </li>
                          <li>
                            Dans le cas d'un Client correspondant, le Client et le Client correspondant seront fusionnés ensemble
                            et le Rendez-vous Réussi le plus récent sera utilisé pour déterminer si une Réservation Sindoor est
                            une Nouvelle Réservation ou une Réservation Répétée.{" "}
                          </li>
                          <li>
                            Lorsque Sindoor offre au Prestataire un Essai gratuit, le Prestataire comprend et accepte que les
                            Conditions commerciales Prestataire s'appliquent intégralement. Le Prestataire s'engage par les
                            présentes à payer toutes les Charges applicables après la fin de l'Essai gratuit et à fournir ses
                            coordonnées bancaires à Sindoor via Connect avant la fin de l'Essai gratuit. Si le Prestataire omet de
                            fournir ses coordonnées bancaires à Sindoor conformément à la présente clause 2.9, le Prestataire
                            comprend et accepte que Sindoor cessera la fourniture de tout ou partie des Services Sindoor avec
                            effet immédiat et sans autre avis. Sindoor peut, à sa seule discrétion, rétablir une partie ou la
                            totalité des Services Sindoor si le Prestataire fournit les détails du paiement à Sindoor. Sindoor ne
                            sera en aucun cas responsable envers le Prestataire de la résiliation immédiate des Services Sindoor,
                            conformément à la clause 3.7 et sous réserve de la clause 14.2  Afin d’éviter toute ambiguïté, aucun
                            des produits ou services qui leurs sont propres ne sont offerts, ni par Sindoor, ni par une quelconque
                            entreprise qu’elle contrôle via un quelconque Service P2B Sindoor. Sindoor n’offre ni ne permet à
                            aucun tiers d’offrir en son nom, un quelconque produit ou service accessoire aux Clients avant la fin
                            du mandat (que ce soit indépendamment ou en collaboration avec un Prestataire ou un tiers). Toutefois,
                            s’ils le souhaitent, les Prestataires peuvent proposer aux Clients tout produit ou service ou toute
                            condition qu’ils souhaitent, tel que la vente de shampooing à l’issue d’un rendez-vous chez le
                            coiffeur.
                          </li>
                        </ul>
                        <li>
                          <h6>
                            LICENCE DU LOGICIEL CONNECT, Sindoor PDV, DU WIDGET ET DU SITE DU Prestataire – SERVICES ET ACCÈS AUX
                            DONNÉES
                          </h6>
                          <ul>
                            <li>
                              Moyennant paiement des Charges applicables, le Prestataire peut utiliser Connect, le Widget, Sindoor
                              PDV et/ou le Site du Prestataire aux fins de traiter des Réservations de Services du Prestataire
                              pour son propre compte uniquement.{" "}
                            </li>
                            <li>
                              L'utilisation de Connect, le Widget, Sindoor PDV et/ou le Site du Prestataire par le Prestataire se
                              fait à ses propres risques. Le service est fourni « en l'état » et « suivant disponibilité »
                            </li>
                            <li>
                              L'assistance technique est fournie principalement par courriel et constitue un avantage et non un
                              droit pour le Prestataire.
                            </li>
                            <li>
                              Le Prestataire comprend et accepte que :
                              <ul>
                                <li>
                                  Sindoor utilise des fournisseurs et des Prestataires d'hébergement tiers pour fournir le
                                  matériel, les logiciels, la mise en réseau, le stockage et la technologie associée requis pour
                                  exécuter Connect, le Widget, Sindoor PDV et le Site du Prestataire ;{" "}
                                </li>
                                <li>
                                  Sindoor a un accès administrateur à toutes les parties de Connect, y compris aux parties
                                  spécifiquement conçues pour le Prestataire ;{" "}
                                </li>
                                <li>
                                  Sindoor suivra, au moyen d’outils tiers tels que Google Analytics et Snowplow, l’utilisation de
                                  Connect par le Prestataire, ses employés et prestataires. Les données de suivi couvriront toute
                                  interaction unique que l’utilisateur a et les détails techniques du navigateur et l’appareil
                                  utilisé et inclura mais ne sera pas limité à (a) la création de rendez-vous, (b) les employés
                                  qui font des modifications, et (c) la visualisation de l’agenda. Ce suivi permettra à Sindoor de
                                  comprendre comment Connect est utilisé par les Prestataires et lui permettra de développer et
                                  améliorer Connect. . Le Prestataire n’est pas autorisé à accéder à ces données et n’a aucun
                                  droit sur ces données et les Prestataires ne peuvent refuser ce suivi. Le Prestataire est tenu
                                  d’alerter ses employés et prestataires qu’un tel suivi aura lieu. Les références au suivi sont
                                  incluses dans la Politique de protection de la vie privée et des cookies de Sindoor, ce qui
                                  devrait être porté à l’attention des employés et prestataires du Prestataire ; et{" "}
                                </li>
                                <li>
                                  Le Widget et le Site du Prestataire sont « Alimentés par Sindoor », contiennent la marque
                                  Sindoor, incluant les logos, marques et images, et donneront l’opportunité aux Clients Widget de
                                  choisir de recevoir du marketing via e-mail du Prestataire et de Sindoor.{" "}
                                </li>
                                <li>
                                  Sindoor a et est autorisée à avoir accès à toutes les données fournies directement par les
                                  Prestataires et/ou Clients ou générées par l’utilisation par un quelconque Prestataire et/ou
                                  Client des Services P2B Sindoor (« Accès Sindoor »), y compris, mais sans s’y limiter :
                                  <ul>
                                    <li>Le Contenu Prestataire ; </li>
                                    <li>
                                      outes les données relatives aux comptes des Prestataires et à l’utilisation des Services
                                      Sindoor ;
                                    </li>
                                    <li>
                                      les informations de compte des Clients – le Contenu Généré par l’Utilisateur et les détails
                                      de l’utilisation des Services Prestataire par les Clients ;
                                    </li>
                                    <li>
                                      toutes les métadonnées associées, par ex. date/heure de connexion du Prestataire et Client ;
                                      et
                                    </li>
                                    <li>
                                      toutes les données personnelles des Clients et Prestataires, telles que décrites plus en
                                      détail à l’article 10 et notre Politique de Confidentialité et en matière de Cookies.{" "}
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  Sindoor conserve l’Accès de Sindoor après la résiliation du présent Contrat durant la période de
                                  conservation requise par la loi ou la réglementation et conformément aux politiques de
                                  conservation de Sindoor.{" "}
                                </li>
                                <li>
                                  Un Prestataire peut accéder aux données en rapport avec son compte et aux données du Client, et
                                  y compris aux coordonnées du Client, en se connectant à son compte Connect, et ceci peut inclure
                                  des rapports contenant des informations compilées concernant le Prestataire, ses employés et les
                                  Clients du Prestataire. Toutefois, les Prestataires n’ont pas accès aux sites, adresses
                                  physiques ou autres informations de localisation d’un Client de Sindoor ou du Widget pouvant
                                  être partagés par un Client de Sindoor et/ou du Widget. À la réalisation de leur compte Sindoor,
                                  les Prestataires peuvent exporter leur Base de données Clients avant la prise d’effet de la
                                  résiliation. Afin d’éviter toute ambiguïté, les Prestataires ne sont pas autorisés à exporter,
                                  ni n’ont un quelconque droit sur, un quelconque Contenu Généré par l’Utilisateur.{" "}
                                </li>
                                <li>
                                  Les Prestataires n’ont accès à aucune donnée fournie par ou générée lors de la fourniture des
                                  Services Sindoor à tous les Prestataires Sindoor en général et/ou à tous les Clients en général
                                  (ou toute sous-catégorie de ceux- ci), sous forme agrégée ou autrement. Toutefois, Sindoor
                                  s’efforce à partager les tendances générales au niveau national/régional au moyen de lettres
                                  d’information occasionnelles aux Prestataires qui ont consenti à recevoir du marketing de
                                  Sindoor (ex. à quelle fréquence les Clients reviennent en général, durant combien de temps ils
                                  parcourent notre Site Internet, etc.).{" "}
                                </li>
                                <li>
                                  Certains tiers peuvent accéder aux données à l’occasion. Les données du Client et les données du
                                  Prestataire fournies en vue de l’utilisation des Services P2B Sindoor ou générées lors de leur
                                  fourniture seront uniquement partagées avec des tiers dans la mesure nécessaire à la bonne
                                  fourniture des Services P2B Sindoor. Pour voir les autres tiers avec lesquels les données
                                  peuvent être partagées, consultez la Politique de Confidentialité et en matière de Cookies. Les
                                  Clients peuvent refuser certaines catégories de cookies conformément à la Politique de
                                  Confidentialité et en matière de Cookies et au Centre de Préférences en matière de Cookies.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Prestataire ne doit pas :
                              <ul>
                                <li>
                                  reproduire, dupliquer, copier, vendre, revendre ou exploiter tout ou partie de Connect, de
                                  Sindoor PDV, du Widget ou du Site du Prestataire ;
                                </li>
                                <li>
                                  permettre à un tiers (y compris aux sociétés du groupe du Prestataire) d'utiliser ou d'accéder à
                                  Connect (notamment Sindoor PDV) sans l'autorisation écrite expresse préalable de Sindoor (qui
                                  peut être refusée ou donnée dans les conditions que Sindoor définit à sa seule discrétion) ;{" "}
                                </li>
                                <li>
                                  envoyer des e-mails, SMS ou autres formes de marketing électronique à ces Clients via Connect
                                  (ou autre) qui ne sont pas sollicités ; ou{" "}
                                </li>
                                <li>divulguer, partager ou vendre toute coordonnée de login Connect ou Sindoor PDV.</li>
                              </ul>
                            </li>
                            <li>
                              Sindoor ne garantit pas :
                              <ul>
                                <li>
                                  que Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire répondra aux exigences
                                  spécifiques du Prestataire ;{" "}
                                </li>
                                <li>
                                  que Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire fonctionnera sans interruption,
                                  en temps opportun, de manière sécurisée et sans erreurs ;{" "}
                                </li>
                                <li>
                                  que les informations ou résultats obtenus grâce à l'utilisation de Connect, Sindoor PDV seront
                                  exacts ou fiables ;
                                </li>
                                <li>
                                  que la qualité des produits, services, informations ou autres éléments achetés ou obtenus par le
                                  Prestataire par l'intermédiaire de Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire
                                  répondront aux exigences ou aux attentes du Prestataire ; ou{" "}
                                </li>
                                <li>
                                  que les erreurs dans Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire seront
                                  corrigées.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Prestataire comprend et accepte expressément que, concernant son utilisation de Connect, Sindoor
                              PDV, le Widget et/ou le Site du Prestataire, que ce soit pendant un Essai gratuit ou non, sous
                              réserve de la clause 14.2, Sindoor ne sera pas responsable en cas de perte de revenus ou de
                              bénéfices, perte de contrats, perte de clientèle, perte de données, ou d'autres préjudices
                              immatériels ou de préjudice ou dommage indirect ou consécutif (même si Sindoor a été informé par le
                              Prestataire de la possibilité de ce préjudice ou dommage) résultant :
                              <ul>
                                <li>
                                  de l'utilisation de Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire par le
                                  Prestataire ou de son incapacité à l'utiliser ;
                                </li>
                                <li>
                                  de l’arrêt de la fourniture par Sindoor des Services Sindoor à l'expiration de l'Essai gratuit ;
                                </li>
                                <li>
                                  de l'accès non autorisé aux transmissions ou données du Prestataire ou de la modification de
                                  celles-ci ;
                                </li>
                                <li>
                                  de déclarations ou d'agissements de tiers sur Connect, Sindoor PDV, le Widget et/ou le Site du
                                  Prestataire ; ou
                                </li>
                                <li>
                                  de tout autre problème relatif à Connect, Sindoor PDV, le Widget et/ou le Site du Prestataire.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Sindoor fournira un compte utilisateur et un mot de passe au Prestataire lui permettant d’accéder à
                              Connect. Le Prestataire sauvegardera et tiendra les détails du compte utilisateur et du mot de passe
                              secrets et stockés de manière sûre et ne les divulguera à personne d’autre que celles qui ont besoin
                              d’avoir accès à Connect et qui sont au courant des obligations du Prestataire de maintenir ces
                              détails en sécurité. Le Prestataire notifiera Sindoor immédiatement de toute atteinte suspectée à la
                              sécurité ou de toute utilisation non-conforme, y compris toute utilisation qui violerait ce Contrat,
                              les instructions raisonnables données par Sindoor ponctuellement, et/ou la loi applicable.{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Service de photographie</h6>
                          <p style={{ fontWeight: "600" }}>
                            Afin d’éviter toute ambiguïté, il ne s’agit pas d’un Service P2B Sindoor et celui-ci n’est donc pas
                            soumis au Règlement P2B.
                          </p>
                          <p>
                            Sindoor peut, à sa seule discrétion, proposer le Service de Photographie aux Prestataires sous licence
                            moyennant une redevance supplémentaire inclue dans les Frais d'inscription ou sous forme de redevance
                            supplémentaire séparée. Si Sindoor fournit le Service de Photographie à un Prestataire, les conditions
                            supplémentaires suivantes s'appliquent :
                          </p>
                          <ul>
                            <li>
                              Aucune garantie n'est donnée quant à la qualité des photos prises par le Photographe de Sindoor (les
                              « Photos ») et/ou à leur contenu ou mise en page. Il appartient au Prestataire de s'assurer que
                              toutes les personnes (le cas échéant) qui doivent être photographiées sont présentes au rendez-vous
                              avec le Photographe de Sindoor, afin de s’assurer que tous les consentements pour être photographiés
                              ont été obtenus de ceux qui apparaissent dans les Photographies et de convenir avec le Photographe
                              de Sindoor que la mise en page et le contenu des Photos sont au goût du Prestataire.{" "}
                            </li>
                            <li>
                              Le Prestataire peut utiliser et publier les Photos sur les supports suivants uniquement : sur le
                              Site internet, l’App, le Site Prestataire ou le Widget (dans la mesure applicable). Si le
                              Prestataire souhaite utiliser les Photos sur son site internet et/ou sur des pages de médias
                              sociaux, il faut alors installer le Widget. Pour éviter toute ambiguïté, les Photos ne peuvent pas
                              être utilisées sur toute autre plateforme de marché en ligne sur laquelle le Prestataire fait de la
                              publicité pour les Services du Prestataire. Il est possible de recadrer les Photos dans une certaine
                              limite mais aucune autre retouche n'est autorisée et il est strictement interdit aux Prestataires de
                              supprimer les avis de droit d'auteur de Sindoor des Photos.{" "}
                            </li>
                            <li>
                              Le Prestataire reconnaît et accepte par les présentes que les Photos sont utilisées en vertu d'une
                              licence non-exclusive et incessible qui prendra automatiquement fin si le Prestataire quitte la
                              plateforme Sindoor. À l'exception des droits prévus par cette licence, le Prestataire n'aura aucun
                              Droit de propriété intellectuelle sur les Photos. Tous les Droits de propriété intellectuelle sur
                              les Photos seront détenus par Sindoor. Pour éviter toute ambiguïté, Sindoor peut utiliser les Photos
                              dans ses propres campagnes de publicité et de marketing, sur le Site internet, l’App, les Réseaux de
                              Distribution et ses propres et ses pages de médias sociaux et à toute autre fin qu'il juge
                              appropriée.
                            </li>
                            <li>
                              Le Prestataire ne peut pas imprimer, distribuer, utiliser, publier, exploiter, retoucher, recadrer,
                              modifier ou traiter les Photos de toute autre manière sauf dans les cas prévus à la clause 4.2 du
                              présent Contrat ou avec le consentement écrit préalable de Sindoor qui sera donné à la seule
                              discrétion de Sindoor et qui peut faire l'objet de frais supplémentaires.{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Sindoor PDV</h6>
                          <p style={{ fontWeight: "600" }}>
                            Afin d’éviter toute ambiguïté, il ne s’agit pas d’un Service P2B Sindoor et celui-ci n’est donc pas
                            soumis au Règlement P2B.
                          </p>
                          <p>
                            La présente clause 5 s’applique uniquement aux Prestataires ayant commandé Sindoor PDV dans le cadre
                            du Contrat de collaboration ou d’une autre façon.
                          </p>
                          <ul>
                            <li>
                              L’un des Services Sindoor proposés aux Prestataires est l’utilisation du Logiciel et/ ou du Matériel
                              Sindoor PDV qui seront détaillés dans le Contrat de collaboration (ou de toute autre façon convenue
                              séparément entre le Prestataire et Sindoor), ils peuvent différer de ceux qui sont définis dans le
                              présent Contrat. Le Logiciel Sindoor PDV et le Matériel Sindoor PDV seront dénommés conjointement «
                              Sindoor PDV ».
                            </li>
                            <li>Le Prestataire doit payer le Matériel Sindoor PDV à Sindoor par anticipation. </li>
                            <li>
                              Il est de la responsabilité du Prestataire de se familiariser aux fonctionnalités de Sindoor PDV et
                              de s’assurer qu’il correspond aux activités commerciales du Prestataire. Sindoor ne donne aucune
                              garantie quant à l’opérabilité du Logiciel ou du Matériel Sindoor PDV ni de leur interopérabilité.
                              Si le Prestataire achète le Logiciel Sindoor PDV mais pas le Matériel Sindoor PDV, Sindoor ne sera
                              pas à même de fournir une aide à l’intégration ou à la configuration du Logiciel Sindoor PDV avec un
                              matériel tiers.{" "}
                            </li>
                            <li>
                              Le Prestataire est responsable de son activité et de toutes les obligations légales y afférentes,
                              notamment les déclarations et paiements fiscaux et sociaux, conformément au droit applicable.
                            </li>
                            <h6 style={{ margin: "1% 0%" }}>Fourniture du Matériel Sindoor PDV</h6>
                            <li>
                              Le Matériel Sindoor PDV sera fourni à l’adresse de livraison mentionnée par le Prestataire dans le
                              Contrat de collaboration ou à toute autre adresse communiquée par e-mail. Sindoor fournira le
                              Matériel Sindoor PDV dans les 14 jours à compter de la réception du paiement de l’ensemble des
                              Frais. Cette période de livraison peut être étendue si des circonstances indépendantes de la volonté
                              de Sindoor se présentent, notamment des conflits du travail, la maladie d’un employé, des problèmes
                              de livraison ou des cas de force majeure.{" "}
                            </li>
                            <li>
                              Le transfert du Matériel Sindoor PDV à la société de livraison décharge Sindoor de ses obligations
                              de fourniture envers le Prestataire et les risques de dommages accidentels ou d’incapacité de
                              livraison sont transférés au Prestataire au point d’envoi. Cette règle s’applique indépendamment du
                              lieu à partir duquel la livraison du Matériel Sindoor PDV est effectuée et/ou de celui qui prend en
                              charge les frais de livraison.
                            </li>
                            <h6 style={{ margin: "1% 0%" }}>Vices au Matériel Sindoor PDV</h6>
                            <li>
                              Sauf dispositions contraires dans le présent Contrat, les droits du Prestataire en cas de vices au
                              Matériel Sindoor PDV sont régis par la loi. Sindoor rejette toute responsabilité du fait de
                              déclarations du fabricant ou autres tiers (par exemple des allégations publicitaires).{" "}
                            </li>
                            <li>
                              Le Prestataire ne peut faire valoir ses droits en vertu d’un vice que s’il a rempli ses obligations
                              légales d’inspection et de notification et s’il a consulté et suivi en détail le guide de résolution
                              des problèmes de Sindoor pour le Matériel Sindoor PDV. Tout vice apparaissant au moment de
                              l’inspection ou ultérieurement doit être notifié rapidement à Sindoor par écrit, au plus tard deux
                              semaines après sa découverte. Nonobstant les obligations d’inspection et de notification
                              susmentionnées, le Prestataire est tenu de signaler tout vice visible dans les deux semaines à dater
                              de la livraison. Sindoor ne peut être tenue responsable de l’incapacité du Prestataire à procéder à
                              une inspection et/ou à notifier correctement le vice. Sindoor fournira une étiquette d’expédition de
                              Matériel Sindoor PDV à Sindoor pour examen.
                            </li>
                            <li>
                              Le Prestataire aura la possibilité de louer temporairement le Matériel Sindoor PDV (« Matériel en
                              prêt ») pendant l’inspection du Matériel Sindoor PDV. Le Matériel en prêt sera envoyé dans les trois
                              jours ouvrables suivant la notification du vice, conformément toutefois à la disponibilité dudit
                              Matériel. Sindoor facturera des frais d’échange de 99,00 € (hors TVA) au Prestataire pour le
                              Matériel en prêt. Sindoor remboursera intégralement ces frais si un vice est constaté dans le
                              Matériel Sindoor PDV et qu’il relève de la responsabilité de Sindoor. Dans les autres cas, les Frais
                              d’échange ne seront pas remboursés. En échange, le Prestataire sera tenu de renvoyer le Matériel en
                              prêt à Sindoor immédiatement après la suppression de tout vice existant dont Sindoor est
                              responsable.{" "}
                            </li>
                            <li>
                              Si des vices sont découverts dans le Matériel Sindoor PDV, dont Sindoor est responsable, cette
                              dernière peut, toujours à sa seule et entière discrétion, soit corriger les vices existants dans le
                              Matériel Sindoor PDV, soit fournir un Matériel Sindoor PDV de remplacement. La réparation n’inclut
                              pas la désinstallation et la réinstallation de l’élément défaillant si Sindoor n’était initialement
                              pas tenue de l’installer. Sindoor disposera toujours d’un délai et d’une possibilité raisonnable de
                              réparation des dysfonctionnements.
                            </li>
                            <li>
                              En cas de vice, tous les frais liés aux essais ou à la réparation, notamment le transport, le
                              voyage, la main-d’œuvre et les frais matériels (à l’exception des frais de désinstallation et
                              d’installation) sont à la charge de Sindoor. Dans le cas contraire, Sindoor peut exiger le
                              remboursement par le Prestataire des frais (notamment liés aux essais et au transport, ainsi que les
                              frais de tout appareil échangé), sauf si l’absence d’un vice n’était pas identifiable par le
                              Prestataire. Même en cas de vice, le Prestataire pourra exclusivement demander la compensation et/ou
                              le remboursement des frais inutiles engagés conformément à la clause 14 du présent Contrat, toute
                              autre réclamation étant exclue.{" "}
                            </li>
                            <li>
                              Aucun vice ne peut être invoqué lorsque seule une divergence insignifiante au regard de la qualité
                              convenue est constatée, lorsque l’utilisabilité est affectée de manière insignifiante, dans les cas
                              d’usure naturelle ou pour les dommages survenus après le transfert du risque du fait d’une
                              manipulation incorrecte ou négligente, d’une utilisation excessive ou d’influences externes
                              particulières qui n’ont pas été prévues dans le contrat. Aucun vice ne peut être invoqué pour des
                              travaux de maintenance inappropriée ou des modifications apportées par le Prestataire ou par un
                              tiers ainsi que pour leurs conséquences.{" "}
                            </li>
                            <li>
                              Si la réparation échoue, le Prestataire peut, sans préjudice de toute demande de compensation, se
                              retirer du Contrat de collaboration ou décider de ne plus recevoir le Matériel Sindoor PDV et payer
                              les Frais y afférents. La réparation est réputée avoir échoué si deux livraisons de remplacement
                              contiennent également des vices ou si deux rectifications ou réparations ont été effectuées sans
                              succès.
                            </li>
                            <li>
                              Les réclamations pour vices expirent 12 mois après la livraison du Matériel Sindoor PDV à l’adresse
                              de livraison du Prestataire. La disposition qui précède ne s’applique pas si la loi prescrit une
                              période contraignante plus longue.{" "}
                            </li>
                            <h6 style={{ margin: "1% 0%" }}>Back-up des Données Sindoor PDV</h6>
                            <li>
                              Lorsqu’il utilise Sindoor PDV, le Prestataire est responsable du back-up régulier (par exemple
                              quotidien) des données. En dépit de la réalisation de back-up de données réguliers, Sindoor ne peut
                              garantir la sauvegarde complète de toutes les données saisies dans Sindoor PDV. Sindoor ne peut
                              notamment être tenue responsable des pertes provoquées par l’incapacité du Prestataire à sauvegarder
                              ses données. Le Prestataire sera de ce fait responsable de prendre les mesures nécessaires pour
                              prévenir toute interruption de fonctionnement temporaire éventuelle de Sindoor PDV. Sindoor ne peut
                              garantir la disponibilité ininterrompue de Sindoor PDV. Sindoor ne peut être tenue responsable des
                              pertes, notamment d’un manque à gagner, découlant de l’incapacité du Prestataire à prendre des
                              mesures efficaces pour s’assurer de la poursuite des activités en cas de panne temporaire de Sindoor
                              PDV.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Obligations du Prestataire </h6>
                          <ul>
                            <li>
                              En contrepartie de la réception des Services Sindoor, le Prestataire s'engage à payer toutes les
                              Charges applicables à Sindoor et à accepter toutes les Réservations et à traiter et fournir les
                              Services du Prestataire selon les normes du secteur les plus élevées et conformément aux conditions
                              spécifiques énoncées dans le présent Contrat de manière générale et plus particulièrement dans la
                              clause 6. Tout manquement à la clause 6.1 constituera un Manquement grave au Contrat.
                            </li>
                            <li>
                              Le Prestataire doit accepter toutes les Réservations et ne peut les refuser que dans des
                              circonstances exceptionnelles, à défaut le Prestataire sera réputé commettre un Manquement grave au
                              présent Contrat et pourra perdre les paiements qui lui sont dus dans le cadre du Contrat.
                            </li>
                            <li>
                              Concernant toutes les Réservations Widget Prépayées et les Réservations Sindoor, le Prestataire est
                              tenu de respecter la politique d'annulation et de report énoncée à la clause 6 des Conditions
                              générales de réservation. En résumé :
                              <ul>
                                <li>
                                  Sindoor et/ou le Prestataire offrira un remboursement des Réservations Widget Prépayées et des
                                  Réservations Sindoor qui sont annulées (ou impossibles à reporter) à condition que le
                                  rendez-vous concerné ne soit pas prévu dans les 24 prochaines heures.
                                </li>
                                <li>
                                  Si un Client souhaite changer la date et/ou l'heure d'une Réservation Widget Prépayée ou d’une
                                  Réservation Sindoor, et que le Client demande le report du rendez-vous au moins 1 heure avant
                                  l'heure du rendez-vous, soit via le Site internet ou l’App, ou en contactant le Prestataire ou
                                  Sindoor, le Prestataire peut s'efforcer de proposer une autre heure et/ou date de réservation
                                  qui convienne au Client. Si un Prestataire n'est pas en mesure ou ne souhaite pas exécuter une
                                  Réservation Widget Prépayée ou une Réservation Sindoor suite à une demande de changement d'un
                                  Client visée par la présente clause 6.3, le Client pourra choisir de procéder à la Réservation
                                  ou de l’annuler conformément à la clause 6.3(b), c’est-à-dire que :
                                  <ul>
                                    <li>
                                      si le Client annule le rendez-vous, et à condition que cela soit au moins 24 heures avant le
                                      rendez-vous initial, Sindoor traitera la Réservation Widget Prépayée ou la Réservation
                                      Sindoor comme annulée par le Client et remboursera le montant total de la commande au Client
                                      ; ou
                                    </li>
                                    <li>
                                      si le Client annule le rendez-vous moins de 24 heures avant le rendez-vous initial, Sindoor
                                      considérera la Réservation Sindoor ou la Réservation Widget Prépayée comme annulée par le
                                      Client et aucun remboursement ne sera dû.{" "}
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  Si un Prestataire souhaite changer la date et/ou l'heure d'une Réservation Widget Prépayée ou
                                  d’une Réservation Sindoor, si le Client n'est pas en mesure ou ne souhaite pas accepter ce
                                  changement, Sindoor traitera cette Réservation Widget Prépayée ou cette Réservation Sindoor
                                  comme annulée par le Prestataire et remboursera le montant total de la Réservation Sindoor au
                                  Client. Toutefois, si Sindoor le juge raisonnable au vu des circonstances et à sa seule
                                  discrétion, Sindoor peut toujours exiger du Prestataire qu'il paie le montant applicable de
                                  Commission et/ou de Frais de traitement qui aurait été dû par le Prestataire pour cette
                                  Réservation Sindoor ou cette Réservation Widget Prépayée.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Concernant les Réservations Widget PSP, Sindoor est uniquement un fournisseur de technologie et
                              n’intervient pas en tant qu’agent commercial de réservation. Les Clients et les Prestataires ont la
                              possibilité d’annuler les Réservations Widget PSP jusqu’au moment du rendez-vous et aucun contrat
                              n’est créé entre le Client et le Prestataire jusqu’à ce que le rendez-vous ait lieu. Le Prestataire
                              est tenu de fournir les Services au Client et gérer toute annulation ou réaménagement directement
                              avec le Client. Sindoor n’a pas d’autre implication dans le processus de Réservation Widget PSP et
                              se limite à fournir la technologie pour faciliter la réalisation de Réservations Widget PSP. Le
                              Prestataire peut choisir dans Connect si les Clients pourront choisir de recevoir des e-mails
                              marketing du Prestataire uniquement ou du Prestataire et de Sindoor.
                            </li>
                            <li>
                              Le Prestataire est tenu de s'assurer que tout le Contenu du Prestataire (notamment les détails et
                              les prix des Services du Prestataire) qu'il publie ou remet à Sindoor pour publication sur la ou les
                              Page(s) est exact, correct et non trompeur. Ceci inclut uniquement l’affichage des prix au rabais
                              lorsque les Services du Prestataire ont véritablement été proposés à un prix plus élevé auparavant
                              et ne sont disponibles à un prix au rabais que pour une courte période de temps. Tout manquement à
                              la clause 6.5 constituera un Manquement grave au Contrat.{" "}
                            </li>
                            <li>
                              Le Prestataire s’assure que :
                              <ul>
                                <li>
                                  lors du téléchargement du Contenu du Prestataire qui est composé de photographies d’employés ou
                                  du travail de prestataires (« Photos du Portfolio Styliste »), les employés et prestataires du
                                  Prestataire ne peuvent télécharger que les Photos du Portfolio Styliste pour lesquelles ils
                                  disposent de l’intégralité des droits d’auteur et/ou de la permission d’afficher sur toute
                                  plateforme, à toute fin, y compris, mais sans s’y limiter, à des fins de commercialisation,
                                  publicitaires, commerciales et/ou éditoriales dans le monde entier et pour une durée indéfinie,
                                  y compris, mais sans s’y limiter, sur les propres site internet et réseaux sociaux du
                                  Prestataire, le Site Prestataire, le Widget, le Site Internet, l’Application, le Lookbook
                                  Sindoor et sur tout Réseau de Distribution ;{" "}
                                </li>
                                <li>
                                  les employés et prestataires du Prestataire ont obtenu le consentement écrit exprès de toutes
                                  personnes figurant dans les Photos du Portfolio Styliste afin qu'elles soient proprement
                                  utilisées ; et
                                </li>
                                <li>
                                  les Photos du Portfolio Styliste ne contiendront, de quelque manière que ce soit, aucune nudité,
                                  obscénité ou contenu risquant d’intimider, contrarier, alarmer, offenser ou comprenant ce qui
                                  pourrait être sexuellement explicite, illégal ou promouvant la violence ou la haine.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Si, à un moment ou à un autre, Sindoor suspecte que les Photos du Portfolio Styliste ont été
                              téléchargées sans les droits y afférents ou le consentement tel qu’indiqué en clause 6.6(a) et (b)
                              ci-dessus, ou, si à son entière discrétion, Sindoor estime que les Photos du Portfolio Styliste sont
                              inappropriées à quel titre que ce soit, eu égard à la clause 6.6(c), il s’agira alors d’un
                              Manquement grave du Contrat et Sindoor, sans limiter l’éventualité de tout autre recours qui
                              pourrait être exercé, pourra supprimer les Photos du Portfolio Styliste à son entière discrétion.
                            </li>
                            <li>
                              Le Prestataire est responsable et accepte de satisfaire à toutes obligations légales et
                              réglementaires d’information, incluant notamment, mais non exclusivement, les informations devant
                              figurer obligatoirement sur son site internet.
                            </li>
                            <li>
                              Le Prestataire reconnaît et marque son accord par rapport au fait que sa(ses) Page(s) sur le Site
                              internet et l’App ne devront contenir aucune donnée de contact, références directes ou lien vers le
                              Prestataire ou son site web, app, outil ou autres moyens ou vers des sites internet, plateformes,
                              outils ou autres moyens de parties tierces.{" "}
                            </li>
                            <li>
                              Le Prestataire doit s’assurer que ses dénominationet adresse commerciales soient clairement visibles
                              pour les Clients concernant tous les Services Sindoor qu’ils utilisent.
                            </li>
                            <li>
                              Le Prestataire doit à tout moment fournir les Services du Prestataire sur le Site internet et l’App
                              à un prix précis et conforme au meilleur tarif disponible proposé sur le propre site internet du
                              Prestataire. Si un Client apporte la preuve d'un meilleur tarif disponible sur le propre site
                              internet du Prestataire pour les Services du Prestataire réservés par l'intermédiaire du Site
                              internet ou l’App ou le Widget, Sindoor se réserve le droit de rembourser la différence au Client et
                              d'ajuster en conséquence le montant payé au Prestataire pour ces Services du Prestataire. Des prix
                              différents le site web du Prestataire par rapport aux prix affichés sur le Site Internet,
                              l’Application ou le Widget créeraient une mauvaise expérience client et n’est pas conforme au
                              partenariat Sindoor. Cela pourrait également entraîner une augmentation inévitable des Charges. Pour
                              éviter toute ambiguïté, le Prestataire est autorisé à proposer des prix plus bas ou des offres
                              spéciales à des groupes fermés de personnes, en ligne et hors ligne, comme par exemple des membres
                              de son programme de fidélité, ou directement dans le salon du Prestataire et sur d'autres
                              plateformes de vente en ligne. Une violation de la présente clause 6.11 constituera Manquement grave
                              au présent Contrat.
                            </li>
                            <li>
                              Le Prestataire doit s’assurer qu’il a obtenu le consentement de chacun de ses employés et
                              contractuels d’être repris sur le Site web et l’App pour les Clients, en ce compris mais non limité
                              à des coordonnées comme le nom, l’expertise, les données de contact, les disponibilités, les
                              services offerts et photographies.
                            </li>
                            <li>
                              Le Prestataire est tenu seul de s'assurer que les informations dans Connect concernant la
                              disponibilité des dates et heures sont maintenues parfaitement à jour afin que des Clients
                              potentiels soient capables de voir la disponibilité exacte des dates et des heures au moment de
                              passer une Réservation.
                            </li>
                            <li>
                              Concernant les Réservations Sindoor passées en utilisant l'option « Paiement sur place », la
                              Commission est due pour toutes ces Réservations Sindoor sauf si une « non-présentation » a été
                              signalée par le Prestataire sur Connect avant minuit le jour du rendez-vous. Pour éviter toute
                              ambiguïté, si une « non-présentation » n'a pas été signalée sur Connect avant minuit le jour du
                              rendez-vous, la Réservations Sindoor sera traitée par Sindoor comme exécutée et Sindoor sera en
                              droit de recevoir la Commission pour cette Réservations Sindoor.{" "}
                            </li>
                            <li>
                              Le Prestataire s'engage à ne pas inviter des Clients Sindoor ou des Clients Widget à passer des
                              Réservations autrement que par l'intermédiaire du Site internet, des Réseaux de Distribution ou du
                              Widget (le cas échéant). Toute sollicitation peut entraîner des augmentations inévitables des
                              Charges. Dans le cadre du présent Contrat et du partenariat. Sindoor commercialise et souhaite
                              présenter de nouveaux Clients à un Prestataire. Si un Prestataire encourage ce Client à annuler sa
                              Réservation et que celui-ci réserve ensuite directement avec le Prestataire, signifiant ainsi que le
                              Prestataire a profité des Services Sindoor sans les payer, ce qui est injuste pour Sindoor, tant sur
                              le plan économique que commercial.{" "}
                            </li>
                            <li>
                              {" "}
                              Si un Client passe une Réservation Sindoor et que le Prestataire l'encourage à annuler sa
                              Réservations Sindoor et à faire une réservation séparée directement auprès du Prestataire, le
                              Prestataire commet un Manquement grave au présent Contrat.
                            </li>
                            <li>
                              Si Sindoor a des motifs raisonnables de soupçonner que le Prestataire a tenté ou tente directement
                              ou indirectement d'éviter de payer des Charges, par exemple en signalant de manière frauduleuse une
                              Réservation exécutée en utilisant l'option « Paiement sur place » comme une « non-présentation »,
                              ceci constitue un Manquement grave au présent Contrat et donne à Sindoor le droit de retenir des
                              paiements dus au Prestataire au titre du présent Contrat, sans pour autant limiter les autres
                              recours dont il dispose.{" "}
                            </li>
                            <li>
                              Si le Prestataire reçoit l'un des Services Sindoor dans le cadre d'un Essai gratuit, le Prestataire
                              doit fournir à Sindoor tous les détails du paiement avant l'expiration de l'Essai gratuit. Ne pas le
                              faire constituera un Manquement grave au présent Contrat.
                            </li>
                            <li>
                              Si Sindoor a des motifs raisonnables de soupçonner que le Prestataire a fait une tentative directe
                              ou indirecte afin d'éviter de payer des Charges qui seraient autrement dues à la fin de l'Essai
                              gratuit, par exemple et sans limitation, en s'inscrivant ou en tentant de s'inscrire à des Essais
                              gratuits continus en utilisant d'autres coordonnées, noms ou tout autre moyen, ceci constituera un
                              Manquement grave au présent Contrat et lui donnera le droit, sans limitation des autres recours dont
                              elle dispose, de retirer et conserver tout paiement dû à son Prestataire en vertu du présent
                              Contrat.{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Service client et réclamations</h6>
                          <ul>
                            <li>
                              Le Prestataire doit s'efforcer de fournir des Services du Prestataire de haute qualité à tous les
                              Clients et doit traiter rapidement les demandes commerciales, problèmes ou questions relatives aux
                              Réservations ou aux Réservations potentielles, y compris les réclamations des Clients.
                            </li>
                            <li>
                              Le Prestataire sera directement responsable à l'égard du Client en cas de défaut de réponse aux
                              attentes du Client ou en cas de responsabilité légale en lien avec les Services du Prestataire, sauf
                              si cette responsabilité résulte d'une négligence de la part de Sindoor.{" "}
                            </li>
                            <li>
                              Sindoor transfèrera au Prestataire les réclamations des Clients qu'il reçoit et le Prestataire
                              accusera réception de toutes les réclamations et répondra au Client concerné dans les 48 heures
                              suivant la réception de la réclamation par le Prestataire (que cette réclamation soit reçue
                              directement du Client ou par l'intermédiaire de Sindoor).
                            </li>
                            <li>
                              Le Prestataire s'efforcera de régler les réclamations dans les 14 jours et devra notifier à Sindoor
                              toute correspondance entre le Prestataire et le Client concernant la réclamation et, de manière
                              générale, devra tenir Sindoor informé de l'avancement et de l'état de la réclamation.
                            </li>
                            <li>
                              Le Prestataire reconnaît et accepte par les présentes que le Site internet et l’App comprennent une
                              plateforme de commentaires sur laquelle les Clients peuvent poster des avis, visibles par le public,
                              à propos de leurs expériences avec Sindoor et avec le Prestataire (en particulier concernant les
                              Services du Prestataire) (« Contenu généré par les utilisateurs ») et qu’une sélection d’avis des
                              mois précédents sera aussi rendue disponible sur le Site du Prestataire. Le Prestataire doit savoir
                              que cette plateforme ne peut être refusée et qu'elle peut contenir des avis et/ou commentaires
                              négatifs de Clients, indépendants de la volonté de Sindoor. Le Prestataire a la possibilité, s'il
                              fait l'objet d'un Contenu généré par les utilisateurs, de répondre à des avis le concernant.
                              Toutefois, le contenu que le Prestataire poste en réponse à un Contenu généré par les utilisateurs
                              doit être poli et professionnel et non menaçant ni agressif, et il peut être revu par Sindoor (et
                              peut être supprimé ou modifié à la seule discrétion de Sindoor si Sindoor l'estime nécessaire). Pour
                              éviter toute ambiguïté, le Prestataire n'aura aucun droit de recours (y compris notamment le droit
                              de mettre fin au Contrat) suite à un Contenu généré par les utilisateurs nommant ou faisant
                              référence au Prestataire. Toutefois si le Prestataire, agissant raisonnablement, estime qu'un
                              Contenu généré par les utilisateurs est diffamatoire à l'égard du Prestataire ou d'une personne ou
                              constitue, de toute autre manière, une violation des droits d'une personne, le Prestataire peut
                              signaler et déclarer ce Contenu généré par les utilisateurs à Sindoor. Dans ce cas, Sindoor
                              l'examinera et prendra, à sa seule discrétion, toute mesure qu'il juge nécessaire ou souhaitable (y
                              compris notamment le retrait ou la modification de la partie concernée du Contenu généré par les
                              utilisateurs). Le Prestataire ne doit répondre qu’à une évaluation faite via la plateforme de
                              commentaire et ne doit jamais contacter ou tenter d’entrer en contact avec un client en réponse à un
                              commentaire autrement que sur la plateforme de commentaires, même lorsque le Prestataire connait
                              l’identité du client qui a laissé un commentaire ou peut déterminer son identité par d’autres
                              moyens. Tout manquement à la présente clause 7.5 constituera un Manquement grave à ce Contrat.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>RÉCLAMATIONS DES PrestataireS</h6>
                          <ul>
                            <li>
                              Si le Prestataire a une réclamation concernant tout Service P2B Sindoor, celui-ci doit contacter
                              Sindoor par formulaire web en indiquant en objet « Réclamation Formelle » (« Réclamation »), en
                              fournissant autant d’informations que possible concernant la Réclamation.
                            </li>
                            <li>Sindoor répondra au Prestataire en accusant réception et enquêtera ensuite sur la question. </li>
                            <li>
                              Dès réception de la Réclamation, l’équipe chargée de l’expérience client de Sindoor, avec le chargé
                              de compte responsable de ce Prestataire, collaboreront afin d’enquêter en interne sur la
                              Réclamation, en tenant compte de l’importance et de la complexité de la question soulevée.
                            </li>
                            <li>
                              Si la Réclamation concernant un chargé de compte du Prestataire, un autre membre de l’équipe
                              approvisionnement participera à l’investigation à sa place.
                            </li>
                            <li>
                              Sindoor répondra au Prestataire avec ses conclusions en réponse à la Réclamation, et, le cas
                              échéant, avec une suggestion de solution.{" "}
                            </li>
                            <li>
                              Si le Prestataire ou Sindoor préfère, à tout moment, renvoyer un quelconque litige à la médiation,
                              Sindoor souhaite engager les médiateurs suivants www.cedr.com/ (mais le Prestataire et Sindoor
                              peuvent conjointement désigner un médiateur différent s’ils le souhaitent).
                            </li>
                            <p>
                              Tout rapport publié par Sindoor concernant les Réclamations faites en vertu du présent article 8
                              sera disponible sur le Site Internet à partir de juillet 2021.
                            </p>
                          </ul>
                        </li>
                        <li>
                          <h6>Données des clients </h6>
                          <ul>
                            <li>
                              Aux fins de la présente clause, « responsable du traitement des données », « sous- traitant », «
                              personne concernée », « données à caractère personnel », « traiter » « traitement » et « mesures
                              techniques et organisationnelles appropriées » ont la signification qui leur est attribuée dans la
                              Législation relative à la protection des données à caractère personnel en vigueur.{" "}
                            </li>
                            <li>
                              Sindoor et le Prestataire reconnaissent chacun qu'en vertu de la Législation en matière de
                              protection des données à caractère personnel :
                              <ul>
                                <li>
                                  concernant les données à caractère personnel des Clients du Prestataire, le Prestataire est le
                                  responsable du traitement des données à caractère personnel et Sindoor est le sous-traitant ;{" "}
                                </li>
                                <li>
                                  concernant les données à caractère personnel des Clients de Sindoor et des Clients Widget
                                  Prépayés, le Prestataire et Sindoor agissent chacun en qualité de responsable indépendant du
                                  traitement des données à caractère personnel ; et{" "}
                                </li>
                                <li>
                                  concernant les données à caractère personnel des Clients de Widget PSP, le Prestataire est le
                                  responsable du traitement des données à caractère personnel et Sindoor est le sous-traitant,
                                  sauf en ce qui concerne les données à caractère personnel des Clients Widget PSP (c.-à.-d. le
                                  nom et l’adresse email) collectées par Sindoor ou le Prestataire au moment du paiement par le
                                  biais d’un opt-in pour un service marketing individuel par courriel où ils agissent chacun en
                                  qualité de responsable indépendant du traitement des données à caractère personnel.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Dans la mesure où Sindoor et le Prestataire sont chacun des responsables du traitement des données à
                              caractère personnel, ils reconnaissent et acceptent respectivement que :
                              <ul>
                                <li>
                                  hormis ce qui est requis par la clause 8, chaque partie est responsable d’assurer sa propre
                                  conformité à la Législation en matière de protection des données à caractère personnel, en ce
                                  compris le RGPD ;
                                </li>
                                <li>
                                  le Prestataire doit rapidement informer Sindoor (en tout état de cause, dans les 24 heures après
                                  que le Prestataire ou ses employés ou prestataires en aient pris connaissance) de tout dommage
                                  accidentel ou intentionnel, de toute altération, destruction, divulgation non autorisée, perte,
                                  abus ou vol de données à caractère personnel de tout Client de Sindoor ou de tout Client de
                                  Widget auxquelles le Prestataire a accès (« Incident de Sécurité »). Le Prestataire doit
                                  coopérer pleinement et assister rapidement Sindoor dans le cadre de ses efforts en vue (i)
                                  d’enquêter, remédier, et atténuer les effets de l’Incident de Sécurité, et (ii) de satisfaire
                                  aux obligations de notification à l’égard des particuliers, des Clients et des autorités
                                  réglementaires ;
                                </li>
                                <li>
                                  e Prestataire ne doit pas faire, ou manquer de faire, et doit s’assurer que tant son personnel
                                  que d’autres de ses représentants ne font pas ou ne manquent pas de faire, toute chose qui
                                  porterait (ou serait raisonnablement susceptible de porter) Sindoor ou ses Affiliés en violation
                                  d’une provision d’une quelconque Législation en matière de protection des données à caractère
                                  personnel et doit prendre toutes les mesures nécessaires à assurer la fiabilité de ses employés
                                  et agents qui pourraient avoir accès aux données à caractère personnel et s’assurer que ses
                                  employés, prestataires et agents soient informés de la nature confidentielle des données à
                                  caractère personnel et qu’ils suivent une formation relative aux législations applicables au
                                  traitement des données à caractère personnel ;
                                </li>
                                <li>
                                  le Prestataire accepte de mettre en œuvre et de maintenir des mesures techniques et
                                  organisationnelles suffisantes pour que le traitement qu’il fait des données à caractère
                                  personnel respecte la Législation en matière de protection des données à caractère personnel et
                                  que ces données à caractère personnel soient protégées contre les traitements non autorisés ou
                                  illégaux ainsi que contre la perte accidentelle, la destruction, les dommages, le vol,
                                  l’altération ou la divulgation ;
                                </li>
                                <li>
                                  le Prestataire accepte de ne traiter des données à caractère personnel des Clients de Sindoor ou
                                  des Clients de Widget qu’aux fins d’offrir les Services du Prestataire à ces Clients et, dans le
                                  cas où les Clients de Sindoor et les Clients de Widget ont expressément accepté par le biais
                                  d’un consentement opt-in de recevoir du marketing par courriel via le Service eCRM, aux fins de
                                  marketing par courriel et en tout état de cause dans le cadre des Services Sindoor ; et
                                </li>
                                <li>
                                  Dans le cas où le Prestataire, ses Affiliés ou ses fournisseurs ont besoin de transférer des
                                  données à caractère personnel des Clients de Sindoor et/ou des Clients de Widget à des
                                  emplacements situés en dehors de l’Espace Economique Européen, le Prestataire assume l’entière
                                  responsabilité (et accepte l’entièreté des obligations) d’assurer que ces données à caractère
                                  personnel sont traitées dans le respect de la Législation en matière de protection des données à
                                  caractère personnel.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Lorsque le Prestataire est le responsable de traitement des données à caractère personnel, que
                              Sindoor est le sous-traitant et que cela concerne les données à caractère personnel des Clients du
                              Prestataire ou les données à caractère personnel des Clients Widget PSP (sauf en ce qui concerne le
                              marketing par courriel relatif aux Clients Widget PSP et le Prestataire et Sindoor sont des
                              responsables indépendants du traitement des données à caractère personnel), ces données à caractère
                              personnel doivent être traitées par Sindoor dans le respect des obligations de l’Article 28 du RGPD,
                              sous réserve des dispositions de la clause 8.9 reprise ci-dessous et sous réserve pour Sindoor de
                              pouvoir facturer le Prestataire pour l’assistance fournie qui n’a pas été expressément définie dans
                              ce contrat, comme une obligation de service de Sindoor.
                            </li>
                            <li>
                              Sindoor se réserve le droit de traiter les données à caractère personnel du Client comme exposé dans
                              ses politiques de Cookie publicitaire et règles de confidentialité (tel que mis à jour de temps en
                              temps) et par la présente, le Prestataire accepte et consent de manière irrévocable et
                              inconditionnelle au traitement de ces données à caractère personnel par Sindoor. Le Prestataire
                              garantit par ailleurs que chaque Client du Prestataire a été informé de la manière dont Sindoor
                              traitera des données à caractère personnel. Sans limiter les obligations du Prestataire reprises
                              dans ce contrat, le Prestataire agit rapidement afin d’inclure toute information raisonnablement
                              requise par Sindoor dans la politique de confidentialité de son site internet ou toute autre
                              documentation destinée au Client dans le but d’assister chaque partie à se conformer à la
                              Législation en matière de protection des données à caractère personnel.
                            </li>
                            <li>
                              Le Prestataire reconnait que la propriété de tous les droits de propriété intellectuelle relatifs
                              aux données à caractère personnels des Clients de Sindoor, des Clients de Widget et des Clients du
                              Prestataire dans Connect appartiennent à Sindoor ou à ses Affiliés et le Prestataire cède, avec
                              toutes les garanties d’usage, de manière irrévocable et inconditionnelle tous ces droits à Sindoor.
                              Sindoor concède au Prestataire une licence non exclusive d’utilisation de ces données à caractère
                              personnel afin d’exploiter son entreprise, et ce, sous réserve du respect continu par le Prestataire
                              des dispositions de ce contrat.
                            </li>
                            <li>
                              Le Prestataire garantit et déclare qu’il traitera les données à caractère personnel des Clients du
                              Prestataire dans le respect de la Législation en matière de protection des données à caractère
                              personnel et en particulier, que ses employés, prestataires, Prestataires et fournisseurs
                              n'enverront des communications de marketing ou de promotion qu'aux Clients du Prestataires qui y ont
                              consenti. L’utilisation par le Prestataire des données à caractère personnel des Clients du
                              Prestataire est entreprise à ses propres risques, le Prestataire est responsable d’assurer l’entière
                              conformité de son utilisation, ainsi que celle de ses employés, prestataires, Prestataires ou
                              fournisseurs, avec la Législation en matière de protection des données à caractère personnel.
                            </li>
                            <li>
                              Dans la situation où un Client informe un Prestataire ou l’un de ses employés ou prestataires qu’il
                              ne désire plus recevoir de matériel promotionnel de la part de Sindoor et/ou de ses Affiliés, le
                              Prestataire doit rapidement (en tout état de cause pas plus tard que 48 (quarante-huit) heures après
                              en avoir été avisé) informer Sindoor de manière détaillée et par écrit afin que Sindoor puisse
                              répondre à cette demande
                            </li>
                            <li>
                              Dans la situation où une personne concernée fait la demande à chaque partie d’exercer un des droits
                              dont bénéficient les personnes concernées en vertu de la Législation en matière de protection des
                              données à caractère personnel et dans la mesure où chaque partie peut raisonnablement demander des
                              informations ou de l’aide de la part des autres partie en vue de donner effet à un de ces droits,
                              l’autre partie devrait fournir ces informations ou cette aide dans un délai raisonnable, chaque
                              partie portant ses propres frais à cet égard.
                            </li>
                            <li>
                              Dans la situation où chaque partie reçoit la demande d’une autorité de protection des données de
                              fournir des informations relatives à ce contrat ou à la relation entre les parties, cette partie
                              doit rapidement en informer les autres sauf interdiction légale.
                            </li>
                            <li>
                              Tout manquement à la clause 8 par le Prestataire, ou ses employés, prestataires ou agents,
                              constituera un Manquement grave au Contrat.
                            </li>
                            <li>
                              Le Prestataire dédommagera et garantit Sindoor et ses Affiliés contre toute perte, revendication,
                              coût, dommage ou procédure souffert ou engagé par Sindoor et/ou ses Affiliés, découlant ou en
                              relation avec la violation par le Prestataire de cette clause 9.
                            </li>
                            <li>
                              Le Prestataire dédommagera et garantit Sindoor et ses Affiliés contre toute perte, revendication,
                              coût, dommage ou procédure souffert ou engagé par Sindoor et/ou ses Affiliés, découlant ou en
                              relation avec la violation par le Prestataire de cette clause 9.{" "}
                            </li>
                            <li>
                              La présente clause restera, dans son entièreté, en vigueur après la cessation ou l'expiration du
                              présent Contrat.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Garanties et indemnisation du Prestataire</h6>
                          <ul>
                            <li>
                              Le Prestataire doit remettre à Sindoor le Contenu du Prestataire qu'il demande raisonnablement pour
                              fournir les Services Sindoor.
                            </li>
                            <li>
                              Par la présente, le Prestataire concède un droit et une licence (ou sous-licence le cas échéant)
                              non-exclusifs, sans redevance, irrévocables et mondiaux d’utiliser, de reproduire, de distribuer,
                              d’accorder une sous-licence, de communiquer et de rendre disponible le Contenu du Prestataire sur le
                              Site internet, l’App, le Lookbook Sindoor, les pages de réseaux sociaux de Sindoor et tout autre
                              Réseaux de Distribution, et pour tout autre usage qui sont nécessaires ou requis par Sindoor pour
                              l’exercice de ses droits et obligations repris dans ce contrat, et pour tout autre motif, y compris,
                              mais sans s’y limiter, à des fins de commercialisation, publicitaires, commerciales et éditoriales..
                            </li>
                            <li>
                              Sindoor peut accorder une sous-licence, rendre disponible, dévoiler ou offrir le Contenu du
                              Prestataire Affiliés et tierce parties (« Plateforme des tierces parties »), incluant mais non
                              limité à Google via ses services tel que Réserver Avec Google et Google My Business. En aucun cas,
                              Sindoor ne devra être tenue responsable à l’égard du Prestataire pour tout acte ou omission de la
                              part de la Plateforme des tierce parties. L’unique recours dont dispose le Prestataire à l’égard de
                              cette Plateforme des tierce parties est de (a) demander à Sindoor (qui dispose d’un droit mais pas
                              d’une obligation) de mettre hors service ou de se déconnecter de cette Plateforme pour ce qui
                              concerne le Prestataire ; ou (b) mettre fin à ce contrat, dans le respect de la clause 11. Le
                              Prestataire donne à Sindoor toute autorité pour configurer et gérer le contenu du Prestataire sur
                              son compte Google My business en tant que son représentant autorisé. Si le Prestataire souhaite
                              retrouver le contrôle exclusif de son compte Google My business à n’importe quel moment , le
                              Prestataire doit en informer Sindoor et Sindoor prendra les mesures nécessaires pour se dissocier du
                              compte et renoncer aux autorisations pour gérer un tel compte.
                            </li>
                            <li>
                              Par la présente, le Prestataire confère à Sindoor le droit de :
                              <ul>
                                <li>
                                  retirer, modifier, réduire ou remanier d’une autre manière le Contenu du Prestataire publié sur
                                  le Site Internet, l’Application, le Widget, les Réseaux de Distribution, le Site Prestataire
                                  et/ou le Lookbook Sindoor pour tout motif,, en ce compris celles où le Contenu du Prestataire ne
                                  satisfait pas – selon l’opinion raisonnable de Sindoor – aux garanties de la clause 10.5 ou
                                  celles où le Contenu du Prestataire viole les dispositions de ce contrat ; et
                                </li>
                                <li>
                                  faire usage de services d’optimisation des moteurs de recherche, d’un système publicitaire de
                                  paiement au clic ainsi que de tout autre mécanisme qui incarne, incorpore ou cite (en tout ou en
                                  partie) le nom commercial du Prestataire ou toute autre marque utilisée en relation avec les
                                  Services du Prestataire.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Prestataire garantit, promet et déclare que :
                              <ul>
                                <li>
                                  le Contenu du Prestataire qu'il remet à Sindoor dans le cadre du présent Contrat et/ou qu'il
                                  publie (ou remet à Sindoor pour publication) sur le Site internet , l’Application, le Widget,
                                  les Réseaux de Distribution, le Site Prestataire et/ou le Lookbook Sindoor, cas échéant sera
                                  exact à tous égards et ne portera pas atteinte aux droits de toute autre personne (y compris aux
                                  Droits de propriété intellectuelle) ou ne sera pas diffamatoire, illicite, offensant, menaçant
                                  ou pornographique ou non conforme aux normes générales en matière de bon goût et de décence ; et{" "}
                                </li>
                                <li>
                                  il se conforme à toutes les lois applicables et règlementations sur la publicité dans le cadre
                                  des missions de marketing, de vente et de fourniture des Services du Prestataire et qu’il
                                  obtient toutes les licences, acceptations, autorisations et assurances nécessaires ou qu’il est
                                  raisonnable d’obtenir pour le Prestataire eu égard à ses activités commerciales et à son
                                  personnel (et particulièrement eu égard à la fourniture des Services du Prestataire). Ceci
                                  comprend le fait de s'assurer que tous les prix indiqués en tant que rabais constituent de
                                  véritables prix au rabais et ont donc été plus élevés auparavant et seulement au rabais pour une
                                  courte période, comme annoncé.
                                </li>
                              </ul>
                            </li>
                            <li>Tout manquement à la clause 10.5. constituera un Manquement grave au Contrat.</li>
                            <li>
                              Le Prestataire s'engage par les présentes à indemniser et garantir Sindoor et ses dirigeants,
                              administrateurs et employés, de et contre l'ensemble des réclamations, demandes, obligations, motifs
                              d'actions réels ou allégués, procès, dommages, responsabilités, amendes, jugements, coûts (y compris
                              les coûts de règlement), dépenses associées (y compris le paiement des honoraires et débours
                              raisonnables) et pertes (y compris notamment les pertes directes, indirectes ou consécutives, pertes
                              de bénéfices, pertes de réputation et tous les intérêts, pénalités et frais juridiques (calculés sur
                              la base d'une indemnisation totale)) et tous les frais et dépenses professionnels raisonnables
                              découlant ou en lien avec un manquement par le Prestataire à une stipulation du Contrat ou découlant
                              d'une action intentée par un tiers concernant les Services du Prestataire fournis (ou non), ou les
                              actions (ou omissions) du Prestataire ou d'une personne (autre que Sindoor) agissant pour son
                              compte, y compris notamment toute action intentée en lien avec une Loi relative à la protection des
                              données, un Contenu du Prestataire ou une visite d'un Client dans le salon du Prestataire.{" "}
                            </li>
                            <li>
                              Le Prestataire reconnaît que Sindoor conclut le présent Contrat à son propre bénéfice mais également
                              en qualité de mandataire au bénéfice et pour le compte de chacun de ses dirigeants, administrateurs
                              et employés (chacun étant désigné un « Tiers indemnisé » et, collectivement les « Tiers indemnisés
                              ») et que les droits à indemnisation énoncés à la clause 9.7 seront les droits et avantages de
                              chaque Tiers indemnisé (comme s'il était partie au présent Contrat à part entière). Sindoor pourra
                              faire valoir ces droits au titre du présent Contrat en tant que mandataire de chaque Tiers
                              indemnisé. Nonobstant ce qui précède, le Prestataire et Sindoor peuvent convenir par écrit de
                              modifier une stipulation du Contrat sans le consentement des Tiers indemnisés même si cette
                              modification affecte ou affectera les droits conférés aux Tiers indemnisés au titre des présentes.
                            </li>
                            <li>
                              La présente clause 9 restera en vigueur après la cessation ou l'expiration du présent Contrat.{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Conditions de paiement</h6>
                          <p>
                            Afin d’éviter toute ambiguïté, il ne s’agit pas d’un Service P2B Sindoor et celui-ci n’est donc pas
                            soumis au Règlement P2B.
                          </p>
                          <ul>
                            <li>
                              Les services de traitement des paiements pour les Prestataires sont fournis par Stripe et sont
                              assujettis à la Convention de Services Stripe. En acceptant les présentes Conditions commerciales
                              Prestataire et en continuant d'utiliser les Services Sindoor, le Prestataire accepte d'être lié par
                              la Convention de Services Stripe, qui peut être modifiée par Stripe au fil du temps. En aucun cas,
                              les Services Stripe ne peuvent être utilisés en violation de Convention de Services Stripe et tout
                              manquement à cette obligation par un Prestataire constituera un Manquement grave à ce Contrat. Sous
                              réserve du consentement à la Convention de Services Stripe, de l'approbation de Stripe pour qu’il
                              devienne un Compte Connecté Stripe et afin que Sindoor puisse offrir les Services Stripe, le
                              Prestataire devra respecter les conditions supplémentaires suivantes. Un Prestataire ne peut pas
                              être un Compte Stripe Connecté sans respecter les conditions suivantes :
                              <ul>
                                <li>
                                  le Prestataire s'engage à fournir à Sindoor des renseignements type ‘Know Your Customer’ exacts
                                  et complets sur son entreprise ainsi que sur la propriété de son entreprise et à mettre à jour
                                  ces renseignements au besoin pour s'assurer de leur exactitude en tout temps ;
                                </li>
                                <li>
                                  le Prestataire autorise par les présentes Sindoor à agir en son nom pour la création et la
                                  gestion de son Compte Connecté Stripe, pour toute autre activité nécessaire au fonctionnement du
                                  Compte Connecté Stripe et à recevoir des avis de Stripe en son nom, notamment des factures
                                  fiscales ;
                                </li>
                                <li>
                                  le Prestataire autorise par les présentes Sindoor à accéder à ses Données du Compte Connecté
                                  Stripe et à partager les Données du Compte Connecté Stripe avec Stripe. Stripe et Sindoor ont
                                  chacun la responsabilité de vérifier que les Données du Compte Connecté Stripe en leur
                                  possession ou sous leur contrôle sont protégées contre toute divulgation non autorisée ; et{" "}
                                </li>
                                <li>
                                  le Prestataire comprend et reconnaît que si Sindoor soupçonne le Prestataire d'une activité
                                  frauduleuse, illégale, trompeuse ou abusive, il est tenu contractuellement d'en informer
                                  rapidement Stripe dès qu'il en a connaissance.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Sindoor établira un relevé de facturation deux fois par mois à l'attention du Prestataire (le «
                              Relevé de facturation ») qui indiquera dans la synthèse du compte au début du Relevé de facturation
                              (la « Synthèse du compte ») :
                              <ul>
                                <li>le solde reporté issu du précédent Relevé de facturation, le cas échéant;</li>
                                <li>
                                  ce que Sindoor doit au Prestataire pour les Réservations Réalisées au cours de la période
                                  écoulée depuis le dernier Relevé de facturation ;{" "}
                                </li>
                                <li>
                                  ce que le Prestataire doit à Sindoor pour les Charges depuis le dernier Relevé de facturation
                                  (ex. Droits d'inscription, Frais de traitement, et Commission, etc.) (ces montants seront
                                  déduits des montants dus conformément au point 10.2(b) ci-dessus) ; et{" "}
                                </li>
                                <li>
                                  le solde de compte en résultant (le « Solde de clôture ») dû soit par Sindoor au Prestataire,
                                  soit par le Prestataire à Sindoor.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Relevé de facturation détaillera également toutes les catégories de Réservations et de Charges, y
                              compris :
                              <ul>
                                <li>Les Réservations Réalisées où le Client prépaie le montant total dû ; </li>
                                <li>Les Réservations Réalisées en utilisant le « Paiement sur place » ; </li>
                                <li>Les Réservations Widget Prépayées ;</li>
                                <li>
                                  Les Charges dues à Sindoor par le Prestataire qui ne sont pas directement liées à la perception
                                  par Sindoor du règlement d'une Réservations provenant d'un Client (c'est à dire lorsque les
                                  Frais d'inscription sont dus ou lorsque d'autres Charges ou sommes sont dues par le Prestataire
                                  à Sindoor) ; et
                                </li>
                                <li>Les annulations.</li>
                              </ul>
                            </li>
                            <li>
                              Si le Solde de clôture est négatif, Sindoor transfèrera le Solde de clôture au Prestataire dans les
                              3 à 5 Jours ouvrables suivant la date du Relevé de facturation (à condition que le Prestataire ait
                              fourni ses coordonnées bancaires à Sindoor) et aucune autre action ne sera requise du Prestataire au
                              titre de ce Relevé de facturation.{" "}
                            </li>
                            <li>
                              Si le Solde de clôture est positif, le Prestataire autorise Sindoor à envoyer des instructions en
                              son nom à l'institution financière associée à ses détails de paiement (tels qu'entrés dans Connect),
                              afin de prendre tout paiement dû à Sindoor par le Prestataire conformément au Relevé de facturation
                              du compte du Prestataire. Dans l'éventualité où un paiement auquel Sindoor procède échouerait, le
                              Prestataire serait tenu de transférer le Solde de clôture à Sindoor dans les 14 jours suivant la
                              date du Relevé de facturation sur le compte dont les coordonnées figurent sur le Relevé de
                              facturation, par tout moyen que le Prestataire choisira parmi ceux que Sindoor met à disposition, au
                              moment opportun, notamment le virement bancaire, la carte de crédit, la domiciliation et/ou le
                              paiement récurrent. Si le Prestataire a des questions à propos du Relevé de facturation ou des
                              difficultés quant à sa capacité à transférer le Solde de clôture dans les délais requis, le
                              Prestataire doit contacter Sindoor dans les meilleurs délais.
                            </li>
                            <li>
                              Si le Solde de clôture est égal à zéro, le Relevé de facturation indiquera que le Solde de clôture
                              est réglé et qu'aucune autre action n'est requise de la part de Sindoor ou du Prestataire au titre
                              de ce Relevé de facturation.
                            </li>
                            <li>
                              Concernant les Réservations Widget Prépayées et les Réservations Sindoor prépayées, les conditions
                              suivantes s'appliquent :
                              <ul>
                                <li>
                                  Sindoor perçoit les prépaiements de la part des Clients en tant qu'agent commercial du
                                  Prestataire et la dette du Client à l'égard du Prestataire est apurée à la réception du
                                  prépaiement par Sindoor ;
                                </li>
                                <li>
                                  sauf accord contraire écrit entre Sindoor et le Prestataire, le reversement de sommes perçues
                                  par Sindoor et dues au Prestataire sera strictement subordonné à la fourniture par le
                                  Prestataire des Services du Prestataire en vertu d'une Réservation conformément au présent
                                  Contrat ;
                                </li>
                                <li>
                                  sous réserve du respect par le Prestataire de la clause 11.7(b) ci-dessus, le reversement du
                                  Solde de clôture sera dû par Sindoor ou par le Prestataire, selon le cas, conformément à la
                                  clause 11.4 ou 11.5 ci-dessus.{" "}
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Prestataire effectuera tous les paiements dus à Sindoor conformément à la clause 11.5, sans
                              procéder à aucune déduction, que ce soit par voie de compensation, de rétention, de contre-demande,
                              de remise ou de toute autre façon. Toute somme due par le Prestataire à Sindoor en vertu des
                              présentes conditions, impayée au plus tard à sa date d’échéance rend tous les montants dus par le
                              Prestataire à Sindoor exigibles et payables immédiatement et, sans préjudice des autres droits ou
                              recours dont Sindoor pourrait disposer, cette dernière est en droit :
                              <ul>
                                <li>
                                  de suspendre ou de résilier la fourniture des Services Sindoor et le présent Contrat, notamment
                                  la désactivation du listing du Prestataire sur le Site Internet et l’App, jusqu’à ce que des
                                  accords de paiement ou de crédit satisfaisant pour Sindoor soient conclus ;{" "}
                                </li>
                                <li>
                                  de facturer au Prestataire les frais d’obtention d’un jugement ou du paiement, d’inclure tous
                                  les frais professionnels raisonnables (notamment les frais juridiques) et autres frais de
                                  procédure ou de toute autre procédure de recouvrement de créance ; et{" "}
                                </li>
                                <li>
                                  si le Prestataire compte plusieurs sites avec Sindoor, compenser les sommes dues à Sindoor par
                                  le Prestataire par les paiements dont Sindoor est redevable à l’égard du Prestataire en relation
                                  avec ces autres sites.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Le Prestataire est responsable de tout remboursement, rétrofacturations, frais bancaires ou autres
                              frais administratifs (« Frais bancaires ») engagés par Sindoor du fait de l’incapacité du
                              Prestataire à l’informer des modifications des coordonnées de paiement et/ou accords, notamment :{" "}
                              <ul>
                                <li>les détails du compte bancaire ;</li>
                                <li>l’annulation d’un mandat de domiciliation ;</li>
                                <li>l’insuffisance des fonds ;</li>
                                <li>l’expiration de la carte.</li>
                              </ul>
                            </li>
                            <li>
                              Sindoor se réserve le droit de déduire du solde perçu par Sindoor pour le compte du Prestataire les
                              sommes dues à Sindoor par le Prestataire, avant de reverser le Solde de clôture au Prestataire.
                            </li>
                            <li>
                              Tous les règlements dus par Sindoor au Prestataire se feront par virement bancaire en utilisant les
                              coordonnées bancaires fournies par le Prestataire à Sindoor dans Connect (et indiquées sur le Relevé
                              de facturation) et il appartient au Prestataire de s'assurer que ces coordonnées sont exactes.
                              Sindoor effectuera les règlements dus au Prestataire directement au Prestataire uniquement et ne
                              peut pas effectuer de règlement à un tiers. Le Prestataire s’engage à indemniser pleinement Sindoor
                              et à la garantir contre les pertes, dommages ou réclamations découlant de l’incapacité du
                              Prestataire à notifier Sindoor d’une modification de ses coordonnées bancaires, notamment les Frais
                              bancaires qui pourraient en découler pour Sindoor.
                            </li>
                            <li>
                              Sindoor se réserve le droit de facturer des intérêts sur les montants dus par le Prestataire à
                              Sindoor qui ne sont pas payés à l'échéance au taux annuel de 12%. Ces intérêts courront sur une base
                              journalière à compter de la date de mise en impayé du règlement jusqu'à la date de réception par
                              Sindoor du montant intégral dû plus les intérêts courus.{" "}
                            </li>
                            <li>
                              En cas de litige entre Sindoor et le Prestataire, tout montant de la Commission qui n’est pas
                              contesté sera payé à Sindoor conformément à la clause 11. Le Prestataire doit informer Sindoor de
                              son désaccord dans les 14 jours qui suivent la réception du Relevé de facturation et il doit
                              indiquer le motif détaillé de son désaccord. À défaut, le Relevé de facturation est réputé accepté
                              par le Prestataire. Afin d’éviter toute ambiguïté, il s’agit d’une procédure différente de la
                              procédure de réclamations des Prestataires décrite à l’Article 8, et les présentes conditions sur le
                              paiement d’une Commission s’appliquent que le Prestataire formule une quelconque Réclamation ou non
                              et indépendamment du résultat de toute Réclamation.{" "}
                            </li>
                            <li>
                              Le Prestataire est responsable de la retenue et du report des taxes applicables à la Commission en
                              vertu de toutes les lois applicables et des demandes des autorités fiscales compétentes, y compris
                              pour tout intérêt et pénalité imposé(e) pour retard de paiement ou défaut de retenue. Si nécessaire,
                              le Prestataire sera le seul responsable pour s’accorder avec l’autorité fiscale compétente quant au
                              traitement fiscal de la Commission. Le Prestataire doit, sur demande de Sindoor, lui fournir copie
                              des attestations des paiements fiscaux et/ou des attestations d’exemption fiscale. Le Prestataire
                              déclare et garantit qu’il est dûment enregistré auprès des autorités fiscales compétentes, lorsque
                              cela est nécessaire.
                            </li>
                            <li>
                              Le Prestataire comprend et reconnait que Sindoor est un agent commercial de réservation et ne
                              fournit pas de Services du Prestataire au Client. Le contrat portant sur les Services du Prestataire
                              est conclu entre le Prestataire et le Client Sindoor et par conséquent, il en revient de la
                              responsabilité du Prestataire, si celui-ci est enregistré auprès de la TVA, de facturer la TVA sur
                              la valeur totale de la Réservation et de fournir une facture TVA au Client s’il en fait la demande.
                              Les services Sindoor sont soumis à la règle de refacturation. La TVA est due par le bénéficiaire du
                              service conformément à l’article 196 de la directive du Conseil 2006/112/EC.
                            </li>
                            <li>
                              Dans le cas d’activités frauduleuses ou prétendument frauduleuses du Prestataire ou si Sindoor est
                              obligée, en vertu de la loi, d’une décision judiciaire, d’une instruction gouvernementale, d’une
                              décision arbitrale ou en vertu de sa politique d’annulation, de rembourser toute ou partie de la
                              Réservation, Sindoor se réserve le droit de réclamer au Prestataire le remboursement de tout montant
                              dont le Client demande le remboursement à Sindoor.{" "}
                            </li>
                            <li>
                              Tout manquement à cette clause 10 par le Prestataire constituera un Manquement grave à ce Contrat.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Durée du contrat</h6>
                          <ul>
                            <li>
                              Le présent Contrat entrera en vigueur à la Date de Prise d’Effet et se poursuivra sans limitation de
                              durée, sauf s’il est résilié conformément aux articles ci-dessous :
                            </li>
                            <p>
                              Résiliation pour convenance par l’une ou l’autre partie  Cet article s’applique aux Services Sindoor
                              et aux Services P2B Sindoor
                            </p>
                            <li>
                              Le présent Contrat peut être résilié que ce soit concernant les Services Sindoor, les Services P2B
                              Sindoor, à tout moment, par la remise d’une notification écrite de 30 jours minimum par l’une ou
                              l’autre partie à l’autre en vertu des conditions du présent article ou tel qu’autrement autorisé par
                              la loi.
                            </li>
                            <li>
                              Si le Prestataire décide de résilier le présent Contrat, celui-ci doit remettre une notification en
                              (a) formulaire web, ou (b) indiquant qu’il souhaite résilier le Contrat et cesser de recevoir les
                              Services Prestataire sur Connect.
                            </li>
                            <li>
                              Si Sindoor décide de résilier le présent Contrat, nous vous contacterons au courriel ou numéro de
                              téléphone que vous nous avez communiqué dans Connect.
                            </li>
                            <p>Résiliation pour un motif valable par Sindoor</p>
                            <p>Le présent article s’applique aux Services Sindoor et aux Services P2B Sindoor</p>
                            <li>
                              Sindoor peut résilier le présent Contrat avec effet immédiat pour un motif impératif, y compris (a)
                              si un Prestataire viole le présent Contrat ou une loi ou réglementation (y compris la Législation
                              sur la Protection des Données), ou fait quelque chose qui viole les droits d’un tiers y compris les
                              questions affectant la sécurité d’un service, une fraude ou des violations des données, (b) si un
                              Prestataire se comporte d’une quelconque manière illégale ou inappropriée à l’égard d’un Client (y
                              compris lorsqu’un Client l’a signalé à la police), les employés de Sindoor et/ou les propres
                              employés du Prestataire, ou (c) s’il y a eu plus d’une réclamation du Client concernant un
                              Prestataire (« Motif Impératif »).
                            </li>
                            <p>
                              Résiliation pour faute par l’une ou l’autre partie  Le présent article s’applique uniquement aux
                              Services Sindoor qui ne sont pas des Services P2B Sindoor
                            </p>
                            <li>
                              L’une ou l’autre des parties pourra résilier un Service Sindoor n’étant pas un Service P2B Sindoor
                              avec effet immédiat par notification écrite adressée à l’autre partie si:
                              <ul>
                                <li>
                                  l'autre partie commet un Manquement grave à l'une des stipulations du présent Contrat dans la
                                  mesure où elles concernent un quelconque Service Sindoor, à l’exception des Services P2B Sindoor
                                  (en ce compris notamment une violation des articles articles 6.1 (paiement des Charges et
                                  acceptation des Réservations), 6.2 (refus des Réservations uniquement en des circonstances
                                  exceptionnelles), 6.5 (veiller à l’exactitude du Contenu Prestataire), 6.6 (consentement pour
                                  les Photos du Portfolio Styliste), 6.10 (parité des prix), 6.15 (non-sollicitation des Clients),
                                  6.16 (évitement des Charges), 6.17 (informations de paiement après un essai gratuit), 6.18
                                  (évitement des Charges à l’issue de l’essai gratuit), 7.5 (utilisation appropriée de la
                                  plateforme des avis), 9 (Données du Client), 10.5 (consentements au Contenu Prestataire), et 11
                                  (Conditions de Paiement) et qu'il ne peut pas être remédié à ce manquement ou, s'il peut y être
                                  remédié, la partie n'y remédie pas dans les 7 jours suivant la réception d'une notification
                                  écrite indiquant tous les détails du manquement et demandant qu'il y soit remédié ;{" "}
                                </li>
                                <li>
                                  l'autre partie commet un manquement pas grave mais continu (auquel il peut être remédié ou non)
                                  à l'une des stipulations du présent Contrat ;
                                </li>
                                <li>
                                  le bénéficiaire d'une charge prend possession d'un bien ou d'actifs de l'autre partie ou un
                                  liquidateur est nommé pour ces biens ou actifs ;{" "}
                                </li>
                                <li>
                                  l'autre partie établit un accord volontaire avec ses créanciers ou fait l'objet d'une mise sous
                                  administration judiciaire ;
                                </li>
                                <li>
                                  l'autre partie est mise en liquidation (sauf aux fins de fusion ou de restructuration et de
                                  telle sorte que la société en résultant accepte effectivement d'être liée par ou d'assumer les
                                  obligations imposées à cette autre partie au titre du présent Contrat) ;{" "}
                                </li>
                                <li>
                                  un événement analogue à ceux qui précèdent prévu par la loi d'une juridiction survient
                                  concernant cette autre partie ; ou
                                </li>
                                <li>l'autre partie cesse ou menace de cesser d'exercer son activité.</li>
                                <p>
                                  Gel des Services Sindoor Le présent article s’applique aux Services Sindoor et aux Services P2B
                                  Sindoor
                                </p>
                              </ul>
                            </li>
                            <li>
                              Sindoor peut temporairement geler le compte d’un quelconque Prestataire, afin que celui-ci ne puisse
                              plus recevoir les Réservation par l’intermédiaire de Sindoor et ne soit plus visible sur le Site
                              Internet, l’Application ou tout Réseau de Distribution y compris dans les résultats des recherches,
                              si le Prestataire commet, ou est suspecté de commettre, une Violation Substantielle d’une quelconque
                              des dispositions du présent Contrat (y compris, mais sans s’y limiter, une violation de l’article
                              6.1 (paiement des Charges et acceptation des Réservations), 6.2 (refus des Réservations uniquement
                              en des circonstances exceptionnelles), 6.5 (veiller à ’exactitude du Contenu Prestataire), 6.6
                              (consentement pour les Photos du Portfolio Styliste), 6.10 (parité des prix), 6.15
                              (non-sollicitation des Clients), 6.16 (évitement des Charges), 6.17 (informations de paiement après
                              un essai gratuit), 6.18 (évitement des Charges à l’issue de l’essai gratuit), 7.5 (utilisation
                              appropriée de la plateforme des avis), 9 (Données du Client), 10.5 (consentements au Contenu
                              Prestataire), et 11 (Conditions de Paiement) ou si Sindoor étudie un éventuel Motif Impératif de
                              résiliation.
                            </li>
                            <li>
                              Si, après cette étude, Sindoor considère raisonnablement qu’une Violation Substantielle a eu lieu,
                              ou qu’il existe un Motif Impératif de résiliation, Sindoor pourra résilier le présent Contrat en
                              vertu de l’article ci-dessus.{" "}
                            </li>
                            <li>
                              En plus de ce qui précède et afin d’éviter toute ambiguïté, les articles 10.3 et 11.8(a) détaillent
                              également les situations où le Prestataire ou Sindoor peut résilier le présent Contrat.
                            </li>
                            <li>
                              La résiliation du présent Contrat pour quelque cause que ce soit n'affecte pas les droits et les
                              recours des parties qu'elles ont acquis au jour de la résiliation.
                            </li>
                            <li>
                              À la résiliation du présent Contrat, le Prestataire n’aura plus accès à Connect. Le Prestataire doit
                              télécharger toute donnée ou information stockée dans Connect avant la résiliation. Si le Prestataire
                              ne peut le faire et aimerait accéder à une quelconque de ses données se trouvant dans Connect, il
                              doit contacter son chargé de compte, qui s’assurera que ces données ou informations soient cryptées
                              et envoyées au Prestataire par courriel, dans la mesure légalement et pratiquement possible.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Confidentialité</h6>
                          <ul>
                            <li>
                              Chaque partie reconnaît qu'en vertu et pendant la durée du présent Contrat, elle peut recevoir ou
                              prendre autrement connaissance d'informations relatives à l'autre partie, ses plans marketing, ses
                              clients, ses activités, ses plans de développement, ses finances, sa technologie ou ses affaires qui
                              sont la propriété, de nature confidentielle, de l'autre partie (les « Informations Confidentielles
                              »).
                            </li>
                            <li>
                              Chaque partie s'engage à maintenir et à faire maintenir la confidentialité des Informations
                              Confidentielles à tout moment et à assurer et faire assurer la sécurité et la protection des
                              Informations Confidentielles contre le vol, tout dommage, toute perte ou tout accès non autorisé, et
                              s'interdit, à tout moment pendant la durée du Contrat et ultérieurement, sans le consentement écrit
                              préalable du propriétaire des Informations Confidentielles, d'utiliser, de communiquer, d'exploiter,
                              de copier ou de modifier, directement ou indirectement, des Informations Confidentielles, ou
                              d'autoriser ou de permettre à un tiers de le faire, autrement qu'à la seule fin d'exercer ses droits
                              et d'exécuter ses obligations au titre des présentes.
                            </li>
                            <li>
                              Les stipulations de la présente clause 13 et les obligations qu'elle impose ne s'appliquent pas aux
                              Informations Confidentielles qui :
                              <ul>
                                <li>sont dans le domaine public au moment de leur réception par le destinataire ; </li>
                                <li>
                                  tombent ultérieurement dans le domaine public sans aucune faute du destinataire, de ses
                                  dirigeants, employés ou mandataires
                                </li>
                                <li>sont légitimement reçues d’un tiers par le destinataire sans aucune restriction ; ou</li>
                                <li>sont déjà connues du destinataire avant qu'il les reçoive au titre des présentes.</li>
                              </ul>
                            </li>
                            <li>
                              Le destinataire peut communiquer des Informations Confidentielles de manière confidentielle à un
                              conseiller professionnel du destinataire ou s'il est tenu de le faire par la loi, une règlementation
                              ou une décision d'une autorité compétente.{" "}
                            </li>
                            <li>La présente clause restera en vigueur après la cessation ou l'expiration du présent Contrat.</li>
                          </ul>
                        </li>
                        <li>
                          <h6>Responsabilité</h6>
                          <ul>
                            <li>
                              Sous réserve de la clause 14.2, la responsabilité totale maximum de Sindoor au titre ou dans le
                              cadre du présent Contrat ou de tout contrat lié, que ce soit au titre de la responsabilité
                              contractuelle, civile (y compris la négligence) ou autre, ne doit en aucun cas être supérieure aux
                              Charges dues à Sindoor au titre des présentes à la date de l'événement donnant lieu à la
                              réclamation. Par ailleurs, Sindoor ne sera pas responsable en cas de perte de revenus ou de
                              bénéfices, de contrats, de clientèle ou d'autres préjudices immatériels ou de préjudice ou dommage
                              indirect ou consécutif de toute nature résultant et causé par un délit civil (y compris la
                              négligence), un manquement au contrat ou de toute autre manière (même si Sindoor a été informé par
                              le Prestataire de la possibilité de ce préjudice ou dommage).
                            </li>
                            <li>
                              Aucune stipulation du présent Contrat n'exclut ou ne limite de quelque façon que ce soit la
                              responsabilité de Sindoor en cas de fraude ou de décès ou de dommage corporel causé par sa
                              négligence ou en cas de faute volontaire de sa part ou de toute autre responsabilité dans la mesure
                              où celle-ci ne peut pas être exclue ou limitée en vertu d'une disposition légale.
                            </li>
                            <li>
                              La présente clause 14 restera, dans son entièreté, en vigueur après la cessation ou l'expiration du
                              présent Contrat.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>NOTATION</h6>
                          <ul>
                            <li>
                              Il existe des paramètres permettant de déterminer la notation des listes mises à la disposition des
                              Clients par l’intermédiaire de l’Application et/ou du Site Internet. L’ordre d’apparition de la
                              liste d’un Prestataire dans les résultats de recherche, lorsqu’un Client recherche les Services
                              Prestataire sur l’Application et/ou le Site Internet dépend d’un certain nombre de paramètres, dont
                              les principaux sont les suivants :
                              <ul>
                                <li>l’ancienneté de la liste (les listes les plus récentes ont une notation supérieure) ;</li>
                                <li>
                                  combien d’avis ont été reçus (peu d’avis peut signifier une notation inférieure), si ces avis
                                  sont récents (davantage d’avis récents peut entraîner une notation inférieure) et comment les
                                  avis notent le Prestataire (des avis négatifs peuvent entraîner une notation plus faible) ;{" "}
                                </li>
                                <li>
                                  les paramètres de recherche inclus par le Client et la disponibilité et la capacité du
                                  Prestataire à satisfaire aux critères recherchés (par ex. heure et date de rendez-vous ou lieu ;
                                  si un Prestataire n’a que peu de disponibilité aux moments demandés par le Client, le
                                  Prestataire ne sera pas affiché aussi haut dans les résultats de recherche que dans les autres
                                  recherches) ;
                                </li>
                                <li>
                                  la fiabilité d’un Prestataire basée sur le nombre d’annulations ou de replanifications des
                                  Réservations par le Prestataire ou de son manque de réactivité face aux confirmations de
                                  commande du Client (chacun entraînant une notation plus faible) ; et
                                </li>
                                <li>
                                  la localisation du Client si le Client a autorisé le partage de sa localisation avec Sindoor via
                                  l’Application ou leur navigateur (les Prestataires étant les plus proches de la localisation du
                                  Client seront mieux positionnés dans les résultats de recherche).
                                </li>
                                <p>
                                  Ces paramètres sont utilisés car ils montrent fidèlement au Client les expériences des autres
                                  Clients et les Services Prestataire disponibles et qui lui conviennent, et permet à un Client de
                                  voir les nouvelles listes, les listes les plus recommandées (sur la base des avis des Clients)
                                  et tout Prestataire ayant les meilleures disponibilité et fiabilité.
                                </p>
                              </ul>
                            </li>
                            <li>
                              Les Clients peuvent également affiner les résultats de recherche et les notations en effectuant une
                              recherche avec les expressions « Recommandé », « Mieux noté », « Prix » ou « Réduction » ;
                              <ul>
                                <li>
                                  Si un Client fait une recherche avec le terme « Recommandé », l’ordre d’apparition des
                                  Prestataires sera basé sur une combinaison de la disponibilité d’un Prestataire aux moments
                                  requis par le Client, du lieu et de sa notation ;
                                </li>
                                <li>
                                  Si un Client fait une recherche avec l’expression « Mieux Noté », l’ordre d’apparition des
                                  Prestataires sera basé sur le nombre d’avis qu’il a reçus, le caractère récent de ces avis et la
                                  notation obtenue.
                                </li>
                                <p>
                                  Si un Client ne filtre pas les résultats de recherche avec les catégories listées dans le
                                  présent article 15.2, la notation sera basée sur les paramètres listés à l’article 15.1.
                                </p>
                              </ul>
                            </li>
                            <li>
                              Les Prestataires peuvent accéder aux notes et avis des Clients concernant leurs Services Prestataire
                              en visitant le Site Internet ou l’Application ou via Connect, mais les Prestataires n’ont aucun
                              droit quant à ses avis, et ne peuvent effectuer des copies de ces avis à la fermeture du compte du
                              Prestataire et/ou à la résiliation des Services Sindoor.
                            </li>
                            <li>
                              Sindoor ne reçoit aucune rémunération directe ou indirecte ou équivalent d’un quelconque Prestataire
                              afin d’améliorer sa notation dans les résultats de recherche.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h6>Dispositions diverses</h6>
                          <ul>
                            <li>
                              Tous les droits sur le Site internet, l’Application, les Sites Prestataires et leur contenu
                              incluant, sans limitation, les commentaires des Clients, à l'exception du Contenu du Prestataire, et
                              tous les autres Droits de propriété intellectuelle appartenant ou concédés sous licence à Sindoor
                              restent la propriété de Sindoor. Aucune stipulation du présent Contrat ne donne de droits au
                              Prestataire quant à ces Droits de propriété intellectuelle ou à la notoriété qui y est associée.
                              Afin d'uniformiser le Site internet et son contenu (y compris le Contenu du Prestataire), Sindoor
                              pourra modifier, à sa seule discrétion et de temps en temps, le format, le contenu et le style des
                              descriptions, photos et menus de la page du salon.
                            </li>
                            <li>
                              En cas de changement de contrôle ou de direction du Prestataire, le Prestataire doit notifier
                              l'existence et les conditions du présent Contrat au nouveau propriétaire ou dirigeant et informer
                              Sindoor des coordonnées du nouveau personnel concerné.{" "}
                            </li>
                            <li>
                              Toute notification, facture ou autre communication que chaque partie est tenue de signifier à
                              l'autre sera signifiée de façon satisfaisante si elle est envoyée à l'autre partie à l'adresse
                              indiquée dans le présent Contrat (ou à toute autre adresse notifiée par écrit ou par courriel à
                              l'autre partie). Les notifications envoyées par courrier recommandé seront réputées signifiées trois
                              jours ouvrables après le jour d'envoi par la poste. Dans tous les autres cas, les notifications sont
                              réputées signifiées le jour où elles sont effectivement reçues.{" "}
                            </li>
                            <li>
                              Nous avons le droit de réviser et de modifier les présentes conditions de temps à autre pour
                              refléter les changements des conditions du marché affectant notre activité, les changements
                              technologiques, les changements de méthodes de paiement, les modifications des lois et des exigences
                              règlementaires et les changements de capacités de notre système ; nous vous invitons donc à
                              consulter régulièrement nos conditions. . Celles-ci sont, à tout moment, disponibles sur notre Site
                              Internet.
                            </li>
                            <li>
                              La relation des parties est celle d'entrepreneurs indépendants sans lien de dépendance. Sauf
                              stipulation contraire du présent Contrat, aucune stipulation du présent Contrat ne crée entre les
                              parties un partenariat, une coentreprise ou une copropriété.{" "}
                            </li>
                            <li>
                              Aucune des parties ne peut céder, transférer, grever, sous-traiter ou effectuer toute autre
                              opération sur tout ou partie du présent Contrat sans le consentement écrit préalable de l'autre
                              partie (qui ne sera pas déraisonnablement refusé, soumis à des conditions ou retardé).{" "}
                            </li>
                            <li>
                              Sous réserve uniquement des stipulations des clauses 10.7 et 10.8, une personne qui n'est pas partie
                              au présent Contrat ne dispose d'aucun droit de faire exécuter une stipulation du présent Contrat.{" "}
                            </li>
                            <li>
                              Le fait qu'une partie ne fasse pas valoir ou n'exerce pas une stipulation ou un droit prévu par le
                              Contrat, à tout moment ou pendant toute durée, ne constitue pas et ne doit pas être interprété comme
                              une renonciation à cette stipulation ou à ce droit et ne doit en aucun cas affecter le droit pour la
                              partie de le faire valoir ou de l'exercer ultérieurement.
                            </li>
                            <li>
                              Si une stipulation du présent Contrat se révèle illégale, nulle ou inapplicable en vertu d'une loi,
                              cette stipulation sera réputée omise du présent Contrat pour autant qu'elle puisse être séparée des
                              autres stipulations et n'affectera en aucun cas la légalité, la validité ou l'applicabilité des
                              autres stipulations.
                            </li>
                            <li>
                              Le présent Contrat contient l'intégralité des conditions convenues entre les parties relatives à son
                              objet et remplace les contrats, accords ou conventions antérieurement conclus par oral ou par écrit
                              entre les parties.
                            </li>
                            <li>
                              Le présent Contrat sera régi et interprété conformément au droit français, à l'exclusion des
                              dispositions du droit international privé. Les parties se soumettent à la compétence exclusive des
                              tribunaux franciliens pour régler tout litige résultant de ou en lien avec le présent Contrat.{" "}
                            </li>
                          </ul>
                        </li>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="card card-body mb-1">
          <div className="tittle filetittle">
          <span className={showFileInfo5 ? "order-color": "order"}>5</span> 
          <div className="justifySpace" >
          <div className="titleHeading" >
            <h4>Politique du contenu généré par l’utilisateur</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo5: !this.state.showFileInfo5 })}
                className={this.state.showFileInfo5 ? "fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
          </div>
          </div>

          {showFileInfo5 ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div
                  className="subtittle"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                >
                  <div>
                    <h4>5 — Politique du contenu généré par l’utilisateur </h4>
                    <p style={{ fontWeight: "600" }}>
                      Veuillez lire la présente Politique en matière de Contenu Généré par l’Utilisateur avec attention avant de
                      soumettre un CGU vers notre Application, puisque la présente politique et nos Conditions d’Utilisation de
                      notre Application s’appliqueront à votre utilisation de notre Application et au CGU que vous lui soumettez.
                      Nous vous recommandons d’imprimer un exemplaire des présentes pour les consulter ultérieurement. En
                      utilisant notre Application et en soumettant du CGU sur celle-ci, vous confirmez que vous acceptez toutes
                      nos Conditions et Politiques et que vous vous engagez à vous y conformer. Si vous n’acceptez pas nos
                      Conditions et Politiques, vous ne devez pas utiliser notre Application ou lui soumettre du CGU. Les termes
                      commençant par une majuscule utilisés mais non définis dans la présente Politique en matière de Contenu
                      Généré par l’Utilisateur ont les significations qui leur sont attribuées dans nos Conditions d’Utilisation
                      de l’Application.
                    </p>
                    <ul>
                      <li>
                        <h6>Votre CGU</h6>
                        <ul>
                          <li>
                            Tout le contenu soumis à votre Application par vous (ou pour votre compte) par votre compte de Membre
                            (ou autre compte d’un média social, le cas échéant), y compris, notamment, votre nom, vos informations
                            biographiques et tous les autres noms, noms d’utilisateurs, pseudonymes, texte, éléments similaires,
                            graphiques, logos, marques, images, photographies, code et toutes les autres informations et matériel
                            sont désignés votre "CGU".
                          </li>
                          <li>
                            Vous acceptez de soumettre le CGU à l’Application conformément aux règles suivantes (en particulier,
                            les Normes Juridiques et Directives Communautaires, telles que ces expressions sont définies
                            ci-dessous). Veuillez faire preuve de prudence et de bon sens lorsque vous soumettez un CGU à
                            l’Application.
                          </li>
                          <li>
                            La publication de votre CGU aura lieu à notre entière discrétion et nous sommes en droit d’apporter
                            des compléments ou de faire des suppressions de votre CGU avant toute publication, après la
                            publication ou de refuser la publication.
                          </li>
                          <li>
                            Veuillez noter que tout CGU que vous soumettez sur notre Application sera considéré comme non
                            confidentiel et non privatif.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Droits, autorisations et non-renonciation</h6>
                        <ul>
                          <li>
                            Vous concédez par les présentes à Sindoor et à l’une quelconque des sociétés de notre groupe et
                            affiliées, une licence non exclusive, perpétuelle, irrévocable, cessible et gratuite (y compris tous
                            les droits de concéder une sous-licence) afin d’utiliser, de reproduire et de publier votre CGU (y
                            compris, notamment, le droit d’adapter, de modifier et de changer votre CGU) sur tout support ou sous
                            tout format (actuellement connu ou inventé à l’avenir) dans le monde entier et sans restriction.
                          </li>
                          <li>
                            Vous déclarez et nous garantissez que tout le CGU que vous soumettez est votre propre travail ou que
                            vous avez obtenu tous les droits et autorisations nécessaires du propriétaire du travail et que vous
                            disposez de tous les droits pertinents dans votre CGU vous permettant d’accorder les droits et
                            autorisations figurant dans la présente clause
                          </li>
                          <li>
                            Si votre CGU contient des images de personnes ou des noms ou identifie des individus, vous
                            garantissez, déclarez et vous engagez comme suit envers nous:
                            <ul>
                              <li>
                                tous les individus présentés ou identifiés ont plus de 18 ans et ont expressément accepté
                                d’apparaître dans le CGU et accepté que vous soumettiez le CGU à notre Application, et{" "}
                              </li>
                              <li>si les individus présentés ou identifiés ont moins de 18 ans, vous: </li>
                              <li>êtes le parent ou le tuteur légal de ces individus présentés ou identifiés, ou</li>
                              <li>
                                avez obtenu l’accord exprès d’un parent ou du tuteur légal de ces individus présentés ou
                                identifiés pour qu’ils apparaissent dans le CGU et que vous soumettiez le CGU à notre Application.{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            Vous renoncez et vous engagez inconditionnellement et irrévocablement à ne pas faire valoir (ou
                            obtenir la même chose de tout tiers, le cas échéant) de droits moraux ou droits similaires et tout
                            droit de publicité ou de respect de la vie privée dans un pays du monde en rapport avec votre CGU,
                            dans toute la mesure autorisée par la loi.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Normes du contenu – normes juridiques </h6>
                        <ul>
                          <li>
                            Vous nous garantissez et vous engagez à ce que le contenu produit (incluant son utilisation, sa
                            publication et/ou son exploitation par nos soins) est conforme à notre Guide des avis, consultable sur
                            notre Application et ne contiendra aucun élément:
                          </li>
                        </ul>
                      </li>
                      <li>
                        ne contrefera pas les droits d’auteur ou les droits sur des bases de données, marques de fabrique, droits
                        à la vie privée, droits de publicité et autres droits de propriété intellectuelle ou autres droits de
                        toute personne physique ou morale ; et/ou
                      </li>
                      <li>ne contiendra aucun élément diffamatoire pour toute personne; et/ou</li>
                      <li>
                        ne contiendra aucune déclaration trompeuse ou mensongère ni aucune omission ou fausse déclaration quant à
                        votre identité (par exemple, par l’usurpation de l’identité d’une autre personne) ou à votre affiliation
                        avec toute personne physique ou morale; et/ou{" "}
                      </li>
                      <li>
                        ne violera aucune obligation légale ou fiduciaire due à un tiers, notamment une obligation contractuelle
                        ou une obligation de confidentialité; et/ou{" "}
                      </li>
                      <li>
                        ne prônera, n’encouragera ni n’aidera toute discrimination basée sur la race, le sexe, la religion, la
                        nationalité, une invalidité, l’orientation sexuelle ou l’âge : et/ou
                      </li>
                      <li>
                        ne contiendra aucun code malveillant, tel qu'un virus, vers, cheval de Troie ou autre programme, code ou
                        matériel potentiellement nuisible; et/ou{" "}
                      </li>
                      <li>
                        ne violera aucun(e) loi, ordonnance, règle ou règlement,
                        <p>(collectivement ou individuellement les "Normes Juridiques").</p>
                        <ul>
                          <li>
                            Si votre CGU contient un élément que vous ne détenez pas ou qui ne vous a pas été concédé sous licence
                            et/ou qui fait l’objet de droits de tiers, vous êtes tenu d’obtenir, avant la soumission de votre CGU,
                            toutes les autorisations, accords et/ou licences nécessaires permettant l’utilisation et
                            l’exploitation de votre CGU par nous, sans contrepartie supplémentaire. Veuillez vous reporter à la
                            clause 2 ci-dessus pour obtenir de plus amples détails.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h6>Normes du contenu –– directives communautaires</h6>
                        <ul>
                          <li>
                            Vous déclarez et nous garantissez que votre CGU:
                            <ul>
                              <li>est exact, lorsqu’il énonce des faits; et/ou</li>
                              <li>
                                est sincère, lorsqu’il énonce des avis (par exemple, dans des évaluations de produits ou
                                services).
                              </li>
                            </ul>
                          </li>
                          <li>
                            Vous déclarez et nous garantissez, en outre, que votre CGU (y compris son utilisation, sa publication
                            et/ou son exploitation par nous) ne contiendra aucun élément:{" "}
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        obscène, haineux, incendiaire, offensant ou qui, de toute autre manière, n’est pas conforme aux normes
                        communément acceptées en matière de bon gout et de décence en France et à tout le moins dans le pays où
                        l’utilisateur émet l’avis; et/ou
                      </li>
                      <li>
                        qui est raisonnablement susceptible de harceler, contrarier, gêner ou inquiéter une personne (y compris,
                        notamment, ce qu’on appelle le trolling ou harcèlement électronique); et/ou/or{" "}
                      </li>
                      <li>
                        menaçant, abusif ou qui porte atteinte à la vie privée ou qui provoque une gêne, un inconvénient ou de
                        l’anxiété; et/ou
                      </li>
                      <li>sexuellement explicite; et/ou </li>
                      <li>qui prône, encourage, aide ou présente des scènes de violence; et/ou</li>
                      <li>qui prône, encourage ou aide toute activité illégale ou acte ou omission illicite; et/ou</li>
                      <li>
                        pourrait être réputé constituer une publicité ou promotion non sollicitée ou non autorisée, des pourriels
                        ou messages non sollicités (y compris, notamment, des chaînes de lettres, des opérations pyramidales ou
                        autres formes de sollicitation ou de publicités, commerciales ou autres); et/ou{" "}
                      </li>
                      <li>
                        qui donne l’impression qu’il émane de Sindoor ou qu’il est avalisé par nous ou lié à nous, si ce n’est pas
                        le cas
                      </li>
                      <p>(collectivement ou individuellement les "Directives Communautaires").</p>
                    </ul>
                    <ul>
                      <li>
                        <h6>Conséquences d’une violation </h6>
                        <ul>
                          <li>
                            Si vous ne vous conformez pas à nos Normes Juridiques et/ou Directives Communautaires lors de la
                            soumission du CGU à notre Application, nous nous réservons le droit, à notre entière discrétion, de
                            suspendre votre droit d’utilisation du Application sans vous en informer et/ou de modifier ou
                            supprimer (en tout ou en partie) votre CGU de notre Application à titre temporaire ou permanent.
                          </li>
                          <li>
                            Nonobstant la clause 5.1 ci-dessus, si vous ne vous conformez pas à nos Normes Juridiques et/ou
                            Directives Communautaires ou si votre CGU n’y est pas conforme, et si nous subissons une perte ou un
                            dommage en conséquence, vous serez tenu et vous engagez par les présentes à nous indemniser de cette
                            perte ou de ce dommage
                          </li>
                          <li>
                            Nous nous réservons également le droit de:
                            <ul>
                              <li>transmettre tout CGU qui nous préoccupe aux autorités compétentes; et</li>
                              <li>
                                divulguer votre identité à un tiers (ou son conseiller professionnel) qui fait valoir que l’un de
                                vos CGU constitue une violation de ses droits de propriété intellectuelle ou de son droit à la vie
                                privée.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        <div className="card card-body mb-1">
          <div className="tittle filetittle">
          <span className={showFileInfo6 ? "order-color": "order"}>6</span>
          <div className="justifySpace">
          <div className="titleHeading">
            <h4>Guide des Avis</h4>
            </div>
              <i
                onClick={() => this.setState({ showFileInfo6: !this.state.showFileInfo6 })}
                className={this.state.showFileInfo6 ? "fas fa-minus icon" : "fas fa-plus icon"}
              ></i>
              </div>
          </div>
          {showFileInfo6 ? (
            <ul className="list-group">
              <li className="list-group-item" style={{ display: "flex" }}>
                <div className="subtittle" style={{ width: "100%" }}>
                  <div>
                    <h4>6 — Guide des avis </h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p>Le meilleur | Et le pire | Quand doit-on intervenir</p>
                    </div>
                    <p>
                      La plateforme d'avis proposée par Sindoor est un outil que nous adorons. Les avis sont le meilleur moyen de
                      trouver ce que vous chercher, sans aucun intermédiaire commercial. Bien entendu, pour conserver un contenu
                      toujours plus transparent, honnête et réel, il est important que nous soyons tous sur la même page.
                    </p>
                    <p>Pour une plateforme d'avis toujours plus transparente et positive, voici notre guide:</p>
                    <h6>Le meilleur : </h6>
                    <h6>Comment profiter de la meilleure expérience Sindoor possible </h6>
                    <ul>
                      <li className="listStyleType">
                        Le plus tôt est le mieux. Quelle que soit votre expérience, il y a de grandes chances qu'une personne ait
                        besoin de s'appuyer sur votre expérience et vos retours. Qu'ils soient bons ou mauvais, partagez-les en
                        incluant le plus de détails possibles. Profitez d'avoir encore ces informations en tête en laissant votre
                        avis le plus tôt possible.Seuls les avis donnés jusqu'à 3 mois après le rendez-vous sont publiés : ne
                        laissez pas passer l'opportunité de partager les vôtres ! Veuillez noter qu'une plateforme d'avis vous
                        permet de partager vos retours quant aux services et aux salons. Nous ne publierons que les avis où un
                        rendez-vous a eu lieu. Si votre réservation a été annulée, faites-le savoir à notre équipe d'Expérience
                        Client afin qu'elle puisse vous aider.
                      </li>
                      <li className="listStyleType">
                        Soyez constructif. En cas d'expérience négative, faites-le nous savoir. Soyez précis au sujet de ce qui
                        n'a pas fonctionné. Non seulement les autres utilisateurs prendront votre contenu au sérieux, mais le
                        salon concerné sera également plus enclin à vous écouter et à apporter des améliorations. Plus vos avis
                        sont détaillés, plus ils seront utiles aux autres utilisateurs. Vous pouvez vous exprimer en peu de mots
                        si ces derniers sont constructifs et utiles pour d'autres clients. Si vos avis sont difficiles à
                        comprendre, ou n'aident en rien les autres utilisateurs, le contenu peut être retiré. Toutefois, le nombre
                        d'étoiles donné sera toujours inclus dans le nombre d'étoiles total du salon.
                      </li>
                      <li className="listStyleType">
                        Restez courtois. Notre communauté regroupe des personnes aux opinions diveres. S'adresser à des personnes
                        ou parler d'elles avec respect signifie que chacun peut s'exprimer librement.
                      </li>
                      <li className="listStyleType">
                        Repérez et signalez. Si vous observez des contenus ou des éléments pouvant représenter des violations
                        quant à notre guide, veuillez les reporter auprès de notre équipe d'Expérience Client. Nous nous efforçons
                        de contrôler tout avis ne respectant pas notre guide. mais votre aide est la bienvenue si vous veniez à
                        repérer quelque chose avant nous. Nous pouvons temporairement désactiver les avis reportés auprès de notre
                        équipe et les réviser en détails.
                      </li>
                      <li className="listStyleType">
                        Utilisez un language clair et correct. Vos contributions sont votre voix sur Sindoor. Assurez-vous que
                        votre ton reste clair, spécifique, tout en en tâchant d'éviter au maximum les fautes de typographies.{" "}
                      </li>
                      <li className="listStyleType">
                        Restez en sécurité. Soyez prudents quant au partage de vos informations personnelles sur les espaces
                        publics du site. Gardez en tête que ces informations pourront y être visibles de façon permanente. Si vous
                        ne vous sentez pas à l'aise sur ce terrain, vous pouvez poster du contenu de manière anonyme, votre nom
                        n'étant pas visible sur l'avis. Sindoor sera bien entendu au courant de votre identité, ce qui nous permet
                        de vous contacter si nécessaire.
                      </li>
                    </ul>
                    <h6>Et le pire : </h6>
                    <h6>Comment partager de manière constructive: </h6>
                    <ul>
                      <li className="listStyleType">
                        Restez-en aux faits. Veillez à ne partager que des avis basés sur votre expérience professionnelle. Le
                        contenu que vous soumettez doit également être précis et juste. Prenons l'exemple d'un service réalisé
                        pour lequel vous n'êtes pas satisfait : vous pensez que la personne qui s'est occupée de vous manque de
                        qualification. Cette remarque ne pourra pas figurer dans votre avis, car vous ignorez si tel est le cas.
                        Votre avis doit aussi être basé sur votre soin de beauté : veuillez ne pas en rédiger pour une tierce
                        personne aperçue dans le salon. Cette dernière aura la chance de soumettre son propre avis.{" "}
                      </li>
                      <li className="listStyleType">
                        Restez courtois. Sindoor n'est pas un lieu où sont acceptés les menaces, les attaques personnelles, les
                        commentaires haineux ou agressifs, les discours sectaires ou racistes. Nous sommes une communauté aux
                        croyances, opinions et aux expériences diverses. Veuillez restez respectueux.
                      </li>
                      <li className="listStyleType">
                        Évitez les mots offensants. Conserver un ton adéquat est notre crédo : gros mots, vulgarité, images ou
                        langage sexuellement explicite, ainsi que propositions obscènes sont bannies. Nous vous invitons de même à
                        ne pas écrire en majuscules : votre texte est peut être plus gros mais pas forcément adéquat. Veuillez
                        noter que tout mot en majuscule répertorié sera automatiquement changé en minuscule.{" "}
                      </li>
                      <li className="listStyleType">
                        Pas de spam. Toute référence commerciale évidente, commentaires, ou autre type de contenu sera
                        immédiatement effacé. Il est interdit de poster des liens, du HTML, de partager des numéros de téléphones,
                        adresses emails, ou de partager des informations hors sujet ayant pour but d'obtenir un gain financier ou
                        personnel. Il est de même interdit d'envoyer des messages en masse non sollicités pour promouvoir votre
                        business ou un produit.
                      </li>
                      <li className="listStyleType">
                        Pas de triche. Notre système de réputation et de crédit vise à reconnaître et promouvoir les membres
                        contribuant à la dynamique de la communauté Sindoor de par leur avis.{" "}
                      </li>
                      <li className="listStyleType">
                        Restez dans la légalité. Nous ne souhaitons pas faire appel aux autorités, alors assurez- vous de ne pas
                        enfreindre la loi en:
                      </li>
                    </ul>
                    <p>
                      soumettant de faux avis ou en payant quelqu'un pour le faire au profit de votre business. copiant le contenu
                      appartenant à d'autres personnes, sans permission : veuillez prendre en compte la législation sur les droits
                      d'auteur et la propriété intellectuelle. extorquer les informations personnelles d'un tiers
                    </p>
                    <p>
                      voler ou utiliser tout matériel provenant de Sindoor ou d'un autre site, et à respecter non seulement les
                      droits d'auteur et la propriété intellectuelle, mais aussi le principe de marque déposée. entrer par
                      effraction dans un lieu privé sans autorisation, ou pirater ce dernier, tout particulièrement avec
                      l'intention de causer des dommages ou de voler des informations.
                    </p>
                    <p>
                      menacer, tenir des propos diffamatoires, harceler, enhavir l'espace privé d'un tiers ou imiter celui- ci.
                      Diffamer ou calomnier signifie qu'un avis rapporte des fausses déclarations pouvant porter atteinte au
                      salon. Ceci peut inclure, par exemple, un avis dans lequel vous reporter le manque de compétences d'un
                      expert : ce fait va au-delà de votre ressenti et de vos connaissances. Veuillez en rester à votre opinion
                      sur la prestation.
                    </p>
                    <p>
                      Nous nous engageons à faire notre possible pour éviter la présence de faux avis sur Sindoor. Lors des rares
                      occassions où du contenu suspicieux, des spams, des faux avis ou des informations émanant de profils
                      frauduleux sont détectés, ces derniers sont immédiatement éliminés. Nous nous assurons de prendre les
                      mesures requises afin que les établissements et utilisateurs concernés soient pénalisés quant à leur
                      classement sur Sindoor.
                    </p>
                    <h6>Quand nous devons intervenir: </h6>
                    <p>
                      Sindoor se réserve le droit de modifier ou de retirer tout avis considéré comme inapproprié et/où
                      enfreignant les règles du Guide des Avis Sindoor ou les conditions d’utilisations.
                    </p>
                    <p>
                      Veuillez noter qu'en fonction du degré d'infraction, enfreindre les règles du Guide des Avis peut entraîner
                      la clôture de votre compte Sindoor sans avis préalable.
                    </p>
                    <p>
                      Si votre avis est reporté par notre Équipe de Modération pour infraction, cette dernière peut (a)
                      temporairement désactiver l'avis ou (b) en retirer le contenu durant la période d'investigation. S'il elle
                      considère que l'avis ne respecte pas les directives du Guide des avis, notre équipe peut choisir de (a)
                      retirer l'avis dans son intégralité ou (b) d'en retirer le contenu, en maintenant toutefois le nombre
                      d'étoiles donné lors de l'évaluation. L'Équipe de Modération rétablira toujours le contenu de votre avis si
                      vous choisissez de le modifier ou de le soumettre à nouveau, en conformité avec les règles de notre Guide.
                      Allégations graves et enquêtes policières
                    </p>
                    <p>
                      Heureusement, il est extrêmement rare que de sérieuses allégations soient faites à l'encontre d'un salon
                      listé sur Sindoor. Toutefois, dans le cas d'événements regrettables tels que le report d'activités
                      criminelles, d'une enquêtes policières, ou de sérieuses allégations faites à l'encontre d'un salon, veuillez
                      contacter Sindoor par email en utilisant notre Application. Ceci nous permettra de vous aider au mieux tout
                      en apportant toute l'attention requise à votre requête. Des sujets aussi sérieux ne peuvent être publiés via
                      une plateforme d'avis. Si vous veniez à publier un avis faisant état de l'un de ces scénarios (Allégations
                      graves ou enquête policière), il sera retiré par nos soins et nos équipes prendront contact avec vous pour
                      vous apporter la meilleure assistance possible. Les règles de ce guide des avis ont été rédigées en gardant
                      à l'esprit les intérêts de la communauté Sindoor. Pour toute suggestion additionnelle, amélioration à
                      apporter, ou tout autre type de feedback, veuillez nous envoyer un email en utilisant notre Application.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Files;
