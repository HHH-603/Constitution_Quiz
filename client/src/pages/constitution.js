import React from "react";
import Navbar from "../component/Navbar/index";
import Container from "../component/Container/index";
import ArticleContainer from "../component/ArticleContainer/index";
import AmendmentContainer from "../component/AmendmentContainer/index.js"
import PreambleParagraph from "../component/PreambleParagraph/index";
import HeaderOne from "../component/HeaderOne/index";
import HeaderTwo from "../component/HeaderTwo/index";
import HeaderThree from "../component/HeaderThree/index";
import HeaderFour from "../component/HeaderFour/index";
import Paragraph from "../component/Paragraph/index";
import Footer from "../component/Footer/index";

const constitution = () => {
  return (
    <>
      <Navbar />
      <Container>
        <HeaderOne>The Constitution of the United States of America</HeaderOne>
        <PreambleParagraph>We the People of the United States, in Order to form a more perfect Union,
        establish Justice, insure domestic Tranquility, provide for the common
        defence, promote the general Welfare, and secure the Blessings of Liberty to
        ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</PreambleParagraph>
        <hr />
        <HeaderTwo>Table of Contents</HeaderTwo>
        <HeaderThree>Articles</HeaderThree>
        <p className="table-of-contents-link"><a href="#article-1">Article 1</a></p>
        <p className="table-of-contents-link"><a href="#article-2">Article 2</a></p>
        <p className="table-of-contents-link"><a href="#article-3">Article 3</a></p>
        <p className="table-of-contents-link"><a href="#article-4">Article 4</a></p>
        <p className="table-of-contents-link"><a href="#article-5">Article 5</a></p>
        <p className="table-of-contents-link"><a href="#article-6">Article 6</a></p>
        <p className="table-of-contents-link"><a href="#article-7">Article 7</a></p>
        <HeaderThree>Bill of Rights</HeaderThree>
        <p className="table-of-contents-link"><a href="#amendment-1">Amendment 1</a></p>
        <p className="table-of-contents-link"><a href="#amendment-2">Amendment 2</a></p>
        <p className="table-of-contents-link"><a href="#amendment-3">Amendment 3</a></p>
        <p className="table-of-contents-link"><a href="#amendment-4">Amendment 4</a></p>
        <p className="table-of-contents-link"><a href="#amendment-5">Amendment 5</a></p>
        <p className="table-of-contents-link"><a href="#amendment-6">Amendment 6</a></p>
        <p className="table-of-contents-link"><a href="#amendment-7">Amendment 7</a></p>
        <p className="table-of-contents-link"><a href="#amendment-8">Amendment 8</a></p>
        <p className="table-of-contents-link"><a href="#amendment-9">Amendment 9</a></p>
        <p className="table-of-contents-link"><a href="#amendment-10">Amendment 10</a></p>
        <HeaderThree>Amendments to the Bill of Rights</HeaderThree>
        <p className="table-of-contents-link"><a href="#amendment-11">Amendment 11</a></p>
        <p className="table-of-contents-link"><a href="#amendment-12">Amendment 12</a></p>
        <p className="table-of-contents-link"><a href="#amendment-13">Amendment 13</a></p>
        <p className="table-of-contents-link"><a href="#amendment-14">Amendment 14</a></p>
        <p className="table-of-contents-link"><a href="#amendment-15">Amendment 15</a></p>
        <p className="table-of-contents-link"><a href="#amendment-16">Amendment 16</a></p>
        <p className="table-of-contents-link"><a href="#amendment-17">Amendment 17</a></p>
        <p className="table-of-contents-link"><a href="#amendment-18">Amendment 18</a></p>
        <p className="table-of-contents-link"><a href="#amendment-19">Amendment 19</a></p>
        <p className="table-of-contents-link"><a href="#amendment-20">Amendment 20</a></p>
        <p className="table-of-contents-link"><a href="#amendment-21">Amendment 21</a></p>
        <p className="table-of-contents-link"><a href="#amendment-22">Amendment 22</a></p>
        <p className="table-of-contents-link"><a href="#amendment-23">Amendment 23</a></p>
        <p className="table-of-contents-link"><a href="#amendment-24">Amendment 24</a></p>
        <p className="table-of-contents-link"><a href="#amendment-25">Amendment 25</a></p>
        <p className="table-of-contents-link"><a href="#amendment-26">Amendment 26</a></p>
        <p id="article-1" className="table-of-contents-link"><a href="#amendment-27">Amendment 27</a></p>
        <hr />
        <ArticleContainer>
          <HeaderTwo>Articles</HeaderTwo>
          <HeaderThree>Article 1</HeaderThree>
          <HeaderFour>Section 1</HeaderFour>
          <Paragraph>All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.</Paragraph>
          <HeaderFour>Section 2</HeaderFour>
          <Paragraph>The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.</Paragraph>
          <Paragraph>No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen.</Paragraph>
          <Paragraph>Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons.</Paragraph>
          <Paragraph>The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to choose three, Massachusetts eight, Rhode Island and Providence Plantations one, Connecticut five, New York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five and Georgia three.</Paragraph>
          <Paragraph>When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies.</Paragraph>
          <Paragraph>The House of Representatives shall choose their Speaker and other Officers; and shall have the sole Power of Impeachment.</Paragraph>
          <HeaderFour>Section 3</HeaderFour>
          <Paragraph>The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote.</Paragraph>
          <Paragraph>Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies.</Paragraph>
          <Paragraph>No person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen.</Paragraph>
          <Paragraph>The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided.</Paragraph>
          <Paragraph>The Senate shall choose their other Officers, and also a President pro tempore, in the absence of the Vice President, or when he shall exercise the Office of President of the United States.</Paragraph>
          <Paragraph>The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present.</Paragraph>
          <Paragraph>Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.</Paragraph>
          <HeaderFour>Section 4</HeaderFour>
          <Paragraph>The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof; but the Congress may at any time by Law make or alter such Regulations, except as to the Place of Choosing Senators.</Paragraph>
          <Paragraph>The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day.</Paragraph>
          <HeaderFour>Section 5</HeaderFour>
          <Paragraph>Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business; but a smaller number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide.</Paragraph>
          <Paragraph>Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behavior, and, with the Concurrence of two-thirds, expel a Member.</Paragraph>
          <Paragraph>Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy; and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one fifth of those Present, be entered on the Journal.</Paragraph>
          <Paragraph>Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting.</Paragraph>
          <HeaderFour>Section 6</HeaderFour>
          <Paragraph>The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States. They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same; and for any Speech or Debate in either House, they shall not be questioned in any other Place.</Paragraph>
          <Paragraph>No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office under the Authority of the United States which shall have been created, or the Emoluments whereof shall have been increased during such time; and no Person holding any Office under the United States, shall be a Member of either House during his Continuance in Office.</Paragraph>
          <HeaderFour>Section 7</HeaderFour>
          <Paragraph>All bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills.</Paragraph>
          <Paragraph>Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States; If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it. If after such Reconsideration two thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law. But in all such Cases the Votes of both Houses shall be determined by Yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively. If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law.</Paragraph>
          <Paragraph>Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States; and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill.</Paragraph>
          <HeaderFour>Section 8</HeaderFour>
          <Paragraph>The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States;</Paragraph>
          <Paragraph>To borrow money on the credit of the United States;</Paragraph>
          <Paragraph>To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;</Paragraph>
          <Paragraph>To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States.</Paragraph>
          <Paragraph>To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures;</Paragraph>
          <Paragraph>To provide for the Punishment of counterfeiting the Securities and current Coin of the United States;</Paragraph>
          <Paragraph>To establish Post Offices and Post Roads;</Paragraph>
          <Paragraph>To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries;</Paragraph>
          <Paragraph>To constitute Tribunals inferior to the supreme Court;</Paragraph>
          <Paragraph>To define and punish Piracies and Felonies committed on the high Seas, and Offenses against the Law of Nations;</Paragraph>
          <Paragraph>To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water;</Paragraph>
          <Paragraph>To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years;</Paragraph>
          <Paragraph>To provide and maintain a Navy;</Paragraph>
          <Paragraph>To make Rules for the Government and Regulation of the land and naval Forces;</Paragraph>
          <Paragraph>To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions;</Paragraph>
          <Paragraph>To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress;</Paragraph>
          <Paragraph>To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings; And</Paragraph>
          <Paragraph>To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.</Paragraph>
          <HeaderFour>Section 9</HeaderFour>
          <Paragraph>The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person.</Paragraph>
          <Paragraph>The privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it.</Paragraph>
          <Paragraph>No Bill of Attainder or ex post facto Law shall be passed.</Paragraph>
          <Paragraph>No capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or Enumeration herein before directed to be taken.</Paragraph>
          <Paragraph>No Tax or Duty shall be laid on Articles exported from any State.</Paragraph>
          <Paragraph>No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another.</Paragraph>
          <Paragraph>No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time.</Paragraph>
          <Paragraph>No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince or foreign State.</Paragraph>
          <HeaderFour>Section 10</HeaderFour>
          <Paragraph>No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility.</Paragraph>
          <Paragraph>No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing its inspection Laws: and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; and all such Laws shall be subject to the Revision and Control of the Congress.</Paragraph>
          <Paragraph>No State shall, without the Consent of Congress, lay any duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.</Paragraph>
        </ArticleContainer>
        <hr id="article-2" />
        <ArticleContainer>
          <HeaderThree>Article 2</HeaderThree>
          <HeaderFour>Section 1</HeaderFour>
          <Paragraph>The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice-President chosen for the same Term, be elected, as follows:</Paragraph>
          <Paragraph>Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress: but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector.</Paragraph>
          <Paragraph>The Electors shall meet in their respective States, and vote by Ballot for two persons, of whom one at least shall not lie an Inhabitant of the same State with themselves. And they shall make a List of all the Persons voted for, and of the Number of Votes for each; which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate. The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted. The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed; and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately choose by Ballot one of them for President; and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner choose the President. But in choosing the President, the Votes shall be taken by States, the Representation from each State having one Vote; a quorum for this Purpose shall consist of a Member or Members from two-thirds of the States, and a Majority of all the States shall be necessary to a Choice. In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice President. But if there should remain two or more who have equal Votes, the Senate shall choose from them by Ballot the Vice-President.</Paragraph>
          <Paragraph>The Congress may determine the Time of choosing the Electors, and the Day on which they shall give their Votes; which Day shall be the same throughout the United States.</Paragraph>
          <Paragraph>No person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty-five Years, and been fourteen Years a Resident within the United States.</Paragraph>
          <Paragraph>In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the same shall devolve on the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected.</Paragraph>
          <Paragraph>The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be increased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them.</Paragraph>
          <Paragraph>Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:</Paragraph>
          <Paragraph>"I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States."</Paragraph>
          <HeaderFour>Section 2</HeaderFour>
          <Paragraph>The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any subject relating to the Duties of their respective Offices, and he shall have Power to Grant Reprieves and Pardons for Offenses against the United States, except in Cases of Impeachment.</Paragraph>
          <Paragraph>He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law: but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments.</Paragraph>
          <Paragraph>The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.</Paragraph>
          <HeaderFour>Section 3</HeaderFour>
          <Paragraph>He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient; he may, on extraordinary Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect to the Time of Adjournment, he may adjourn them to such Time as he shall think proper; he shall receive Ambassadors and other public Ministers; he shall take Care that the Laws be faithfully executed, and shall Commission all the Officers of the United States.</Paragraph>
          <HeaderFour>Section 4</HeaderFour>
          <Paragraph>The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.</Paragraph>
        </ArticleContainer>
        <hr id="article-3" />
        <ArticleContainer>
          <HeaderThree>Article 3</HeaderThree>
          <HeaderFour>Section 1</HeaderFour>
          <Paragraph>The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behavior, and shall, at stated Times, receive for their Services a Compensation which shall not be diminished during their Continuance in Office.</Paragraph>
          <HeaderFour>Section 2</HeaderFour>
          <Paragraph>The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority; to all Cases affecting Ambassadors, other public Ministers and Consuls; to all Cases of admiralty and maritime Jurisdiction; to Controversies to which the United States shall be a Party; to Controversies between two or more States; between a State and Citizens of another State; between Citizens of different States; between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects.</Paragraph>
          <Paragraph>In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make.</Paragraph>
          <Paragraph>The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed; but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.</Paragraph>
          <HeaderFour>Section 3</HeaderFour>
          <Paragraph>Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.</Paragraph>
          <Paragraph>The Congress shall have power to declare the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except during the Life of the Person attainted.</Paragraph>
        </ArticleContainer>
        <hr id="article-4" />
        <ArticleContainer>
          <HeaderThree>Article 4</HeaderThree>
          <HeaderFour>Section 1</HeaderFour>
          <Paragraph>Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.</Paragraph>
          <HeaderFour>Section 2</HeaderFour>
          <Paragraph>The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.</Paragraph>
          <Paragraph>A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be found in another State, shall on demand of the executive Authority of the State from which he fled, be delivered up, to be removed to the State having Jurisdiction of the Crime.</Paragraph>
          <Paragraph>No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, But shall be delivered up on Claim of the Party to whom such Service or Labour may be due.</Paragraph>
          <HeaderFour>Section 3</HeaderFour>
          <Paragraph>New States may be admitted by the Congress into this Union; but no new States shall be formed or erected within the Jurisdiction of any other State; nor any State be formed by the Junction of two or more States, or parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress.</Paragraph>
          <Paragraph>The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States; and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State.</Paragraph>
          <HeaderFour>Section 4</HeaderFour>
          <Paragraph>The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion; and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence.</Paragraph>
        </ArticleContainer>
        <hr id="article-5" />
        <ArticleContainer>
          <HeaderThree>Article 5</HeaderThree>
          <Paragraph>The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress; Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.</Paragraph>
        </ArticleContainer>
        <hr id="article-6" />
        <ArticleContainer>
          <HeaderThree>Article 6</HeaderThree>
          <Paragraph>All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation.</Paragraph>
          <Paragraph>This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding.</Paragraph>
          <Paragraph>The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution; but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.</Paragraph>
        </ArticleContainer>
        <hr id="article-7" />
        <ArticleContainer>
          <HeaderThree>Article 7</HeaderThree>
          <Paragraph>The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.</Paragraph>
          <Paragraph>Done in Convention by the Unanimous Consent of the States present the Seventeenth Day of September in the Year of our Lord one thousand seven hundred and Eighty seven and of the Independence of the United States of America the Twelfth. In Witness whereof We have hereunto subscribed our Names.</Paragraph>
        </ArticleContainer>
        <br id="amendment-1" />
        <br />
        <br />
        <HeaderTwo>Bill Of Rights</HeaderTwo>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 1</HeaderThree>
          <span id="amendment-2"></span>
          <Paragraph>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 2</HeaderThree>
          <span id="amendment-3"></span>
          <Paragraph>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 3</HeaderThree>
          <span id="amendment-4"></span>
          <Paragraph>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 4</HeaderThree>
          <span id="amendment-5"></span>
          <Paragraph>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 5</HeaderThree>
          <span id="amendment-6"></span>
          <Paragraph>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offense to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 6</HeaderThree>
          <span id="amendment-7"></span>
          <Paragraph>In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 7</HeaderThree>
          <span id="amendment-8"></span>
          <Paragraph>In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 8</HeaderThree>
          <span id="amendment-9"></span>
          <Paragraph>Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 9</HeaderThree>
          <span id="amendment-10"></span>
          <Paragraph>The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 10</HeaderThree>
          <Paragraph>The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.</Paragraph>
        </AmendmentContainer>
        <br id="amendment-11" />
        <br />
        <br />
        <HeaderTwo>Amendments to the Bill of Rights</HeaderTwo>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 11</HeaderThree>
          <span id="amendment-12"></span>
          <Paragraph>The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 12</HeaderThree>
          <Paragraph>The Electors shall meet in their respective states, and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the government of the United States, directed to the President of the Senate;</Paragraph>
          <Paragraph>The President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted;</Paragraph>
          <Paragraph>The person having the greatest Number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed; and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President. But in choosing the President, the votes shall be taken by states, the representation from each state having one vote; a quorum for this purpose shall consist of a member or members from two-thirds of the states, and a majority of all the states shall be necessary to a choice. And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon them, before the fourth day of March next following, then the Vice-President shall act as President, as in the case of the death or other constitutional disability of the President.</Paragraph>
          <span id="amendment-13"></span>
          <Paragraph>The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President; a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice. But no person constitutionally ineligible to the office of President shall be eligible to that of Vice-President of the United States.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 13</HeaderThree>
          <Paragraph>Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.</Paragraph>
          <span id="amendment-14"></span>
          <Paragraph>Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 14</HeaderThree>
          <Paragraph>All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of thelaws.</Paragraph>
          <Paragraph>Representatives shall be apportioned among the several States according to their respective numbers, counting the whole number of persons in each State, excluding Indians not taxed. But when the right to vote at any election for the choice of electors for President and Vice-President of the United States, Representatives in Congress, the Executive and Judicial officers of a State, or the members of the Legislature thereof, is denied to any of the male inhabitants of such State, being twenty-one years of age, and citizens of the United States, or in any way abridged, except for participation in rebellion, or other crime, the basis of representation therein shall be reduced in the proportion which the number of such male citizens shall bear to the whole number of male citizens twenty-one years of age in such State.</Paragraph>
          <Paragraph>No person shall be a Senator or Representative in Congress, or elector of President and Vice-President, or hold any office, civil or military, under the United States, or under any State, who, having previously taken an oath, as a member of Congress, or as an officer of the United States, or as a member of any State legislature, or as an executive or judicial officer of any State, to support the Constitution of the United States, shall have engaged in insurrection or rebellion against the same, or given aid or comfort to the enemies thereof. But Congress may by a vote of two-thirds of each House, remove such disability.</Paragraph>
          <Paragraph>The validity of the public debt of the United States, authorized by law, including debts incurred for payment of pensions and bounties for services in suppressing insurrection or rebellion, shall not be questioned. But neither the United States nor any State shall assume or pay any debt or obligation incurred in aid of insurrection or rebellion against the United States, or any claim for the loss or emancipation of any slave; but all such debts, obligations and claims shall be held illegal and void.</Paragraph>
          <span id="amendment-15"></span>
          <Paragraph>The Congress shall have power to enforce, by appropriate legislation, the provisions of this article.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 15</HeaderThree>
          <Paragraph>The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.</Paragraph>
          <span id="amendment-16"></span>
          <Paragraph>The Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 16</HeaderThree>
          <span id="amendment-17"></span>
          <Paragraph>The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 17</HeaderThree>
          <Paragraph>The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years; and each Senator shall have one vote. The electors in each State shall have the qualifications requisite for electors of the most numerous branch of the State legislatures.</Paragraph>
          <Paragraph>When vacancies happen in the representation of any State in the Senate, the executive authority of such State shall issue writs of election to fill such vacancies: Provided, That the legislature of any State may empower the executive thereof to make temporary appointments until the people fill the vacancies by election as the legislature may direct.</Paragraph>
          <span id="amendment-18"></span>
          <Paragraph>This amendment shall not be so construed as to affect the election or term of any Senator chosen before it becomes valid as part of the Constitution.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 18</HeaderThree>
          <Paragraph>After one year from the ratification of this article the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.</Paragraph>
          <Paragraph>The Congress and the several States shall have concurrent power to enforce this article by appropriate legislation.</Paragraph>
          <span id="amendment-19"></span>
          <Paragraph>This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 19</HeaderThree>
          <Paragraph>The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.</Paragraph>
          <span id="amendment-20"></span>
          <Paragraph>Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 20</HeaderThree>
          <Paragraph>The terms of the President and Vice President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3d day of January, of the years in which such terms would have ended if this article had not been ratified; and the terms of their successors shall then begin.</Paragraph>
          <Paragraph>The Congress shall assemble at least once in every year, and such meeting shall begin at noon on the 3d day of January, unless they shall by law appoint a different day.</Paragraph>
          <Paragraph>If, at the time fixed for the beginning of the term of the President, the President elect shall have died, the Vice President elect shall become President. If a President shall not have been chosen before the time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice President elect shall act as President until a President shall have qualified; and the Congress may by law provide for the case wherein neither a President elect nor a Vice President elect shall have qualified, declaring who shall then act as President, or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or Vice President shall have qualified.</Paragraph>
          <Paragraph>The Congress may by law provide for the case of the death of any of the persons from whom the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for the case of the death of any of the persons from whom the Senate may choose a Vice President whenever the right of choice shall have devolved upon them.</Paragraph>
          <Paragraph>Sections 1 and 2 shall take effect on the 15th day of October following the ratification of this article.</Paragraph>
          <span id="amendment-21"></span>
          <Paragraph>This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its submission.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 21</HeaderThree>
          <Paragraph>1. The eighteenth article of amendment to the Constitution of the United States is hereby repealed.</Paragraph>
          <Paragraph>2. The transportation or importation into any State, Territory, or possession of the United States for delivery or use therein of intoxicating liquors, in violation of the laws thereof, is hereby prohibited.</Paragraph>
          <span id="amendment-22"></span>
          <Paragraph>The article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by conventions in the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 22</HeaderThree>
          <Paragraph>No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once. But this Article shall not apply to any person holding the office of President, when this Article was proposed by the Congress, and shall not prevent any person who may be holding the office of President, or acting as President, during the term within which this Article becomes operative from holding the office of President or acting as President during the remainder of such term.</Paragraph>
          <span id="amendment-23"></span>
          <Paragraph>This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its submission to the States by the Congress.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 23</HeaderThree>
          <Paragraph>The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct: A number of electors of President and Vice President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State; they shall be in addition to those appointed by the States, but they shall be considered, for the purposes of the election of President and Vice President, to be electors appointed by a State; and they shall meet in the District and perform such duties as provided by the twelfth article of amendment.</Paragraph>
          <span id="amendment-24"></span>
          <Paragraph>The Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 24</HeaderThree>
          <Paragraph>The right of citizens of the United States to vote in any primary or other election for President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.</Paragraph>
          <span id="amendment-25"></span>
          <Paragraph>The Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 25</HeaderThree>
          <Paragraph>In case of the removal of the President from office or of his death or resignation, the Vice President shall become President.</Paragraph>
          <Paragraph>Whenever there is a vacancy in the office of the Vice President, the President shall nominate a Vice President who shall take office upon confirmation by a majority vote of both Houses of Congress.</Paragraph>
          <Paragraph>Whenever the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that he is unable to discharge the powers and duties of his office, and until he transmits to them a written declaration to the contrary, such powers and duties shall be discharged by the Vice President as Acting President.</Paragraph>
          <Paragraph>Whenever the Vice President and a majority of either the principal officers of the executive departments or of such other body as Congress may by law provide, transmit to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office, the Vice President shall immediately assume the powers and duties of the office as Acting President.</Paragraph>
          <span id="amendment-26"></span>
          <Paragraph>Thereafter, when the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that no inability exists, he shall resume the powers and duties of his office unless the Vice President and a majority of either the principal officers of the executive department or of such other body as Congress may by law provide, transmit within four days to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office. Thereupon Congress shall decide the issue, assembling within forty eight hours for that purpose if not in session. If the Congress, within twenty one days after receipt of the latter written declaration, or, if Congress is not in session, within twenty one days after Congress is required to assemble, determines by two thirds vote of both Houses that the President is unable to discharge the powers and duties of his office, the Vice President shall continue to discharge the same as Acting President; otherwise, the President shall resume the powers and duties of his office.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 26</HeaderThree>
          <span id="amendment-27"></span>
          <Paragraph>The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.</Paragraph>
          <Paragraph>The Congress shall have power to enforce this article by appropriate legislation.</Paragraph>
        </AmendmentContainer>
        <hr />
        <AmendmentContainer>
          <HeaderThree>Amendment 27</HeaderThree>
          <Paragraph>No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.</Paragraph>
        </AmendmentContainer>
      </Container>
      <Footer>The Constitution Quiz</Footer>
    </>
  )
};

export default constitution;