<script setup lang='ts'>


const activeTabIndex = ref(1)
function changeTab(index: number) {
    activeTabIndex.value = index
}

</script>
<template>
    <OtherLanding title="Services" />
    <section class="services">
        <div class="page">
            <div class="tabs">
                <h4 @click="changeTab(0)" :class="{ 'active': activeTabIndex == 0 }">Panel Services</h4>
                <h4 @click="changeTab(1)" :class="{ 'active': activeTabIndex == 1 }">Electrical Services</h4>
            </div>
            <div class="content">
                <div v-if="activeTabIndex == 0" class="first">
                    <h2>Panel Services</h2>

                    <div class="card reverse">
                        <img class="round" src="../public/images/services/Rectangle 1218.jpg">
                        <div>
                            <h4>Intelligent Motor Control Centers (Imcc)</h4>
                            <p>The network communication challenges revealed a need to integrate the three
                                major system components: the communications, the hardware, and the
                                software. These next generation, integrated, intelligent MCCs are current
                                technology. The design streamlines installation, set-up, and changes; delivers
                                real-time monitoring of the MCC and easily integrates into a facility-wide network.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <h4>MCC (Motor Control Centers)</h4>
                            <p>Motor Control Centers are suitable for operation of motors ranging from 0.5HP
                                to 500 HP ratings. Motor control center contains various types of starting viz.
                                Direct on line (DOL), Star-Delta, autotransformer, Soft starter etc. Local and
                                remote operation facility, IMCC compatible to PLC/DCS based operation.
                                Motor Control Center is properly ventilated in case of higher size of motor
                                starter. Component layout is made to facilitate ease of operation and
                                maintenance. This control panel is designed as per the latest technological
                                advancements.</p>
                        </div>
                        <img class="round" src="../public/images/services/Rectangle 1221.jpg">
                    </div>

                    <div class="card reverse">
                        <img class="round" src="../public/images/services/Rectangle 1222.jpg">
                        <div>
                            <h4>PCC Power Control Centers)</h4>
                            <p>Motor Control Centers are suitable for operation of motors ranging from 0.5HP
                                to 500 HP ratings. Motor control center contains various types of starting viz.
                                Direct on line (DOL), Star-Delta, autotransformer, Soft starter etc. Local and
                                remote operation facility, IMCC compatible to PLC/DCS based operation.
                                Motor Control Center is properly ventilated in case of higher size of motor
                                starter. Component layout is made to facilitate ease of operation and
                                maintenance. This control panel is designed as per the latest technological
                                advancements.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <h4>Power Distribution Panels</h4>
                            <p>Power Distribution Panels are used for distribution of power on down streams.
                                They are required in case of high concentration of loads other than motor
                                starters.Advantage of using Power Distribution Panel is to clear fault locally
                                hence it does not affect Upstream Switchgear.</p>
                        </div>
                        <img class="round" src="../public/images/services/Rectangle 1223.jpg">
                    </div>

                    <div class="card reverse">
                        <img class="round" src="../public/images/services/Rectangle 1224.jpg">
                        <div>
                            <h4>Automatic Power Factor Improvement systems</h4>
                            <p>Automatic Power Factor Control Panel is designed to maintain power factor of
                                plant close to unity. Auto as well as manual mode is provided for power factor
                                control. Various types of capacitors are used depending on load conditions.
                                Typically, MPP, APP or Mixed dielectric types of capacitors are used. In case
                                of non-linear loads like VFD, UPS, etc. thyristor switching with suitable filtering
                                is used for controlling the power factor.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <h4>VFD Panels</h4>
                            <p>The VFD Panel (Variable Frequency drive panel) also known as VFD Control Panel aredesigned to
                                control the speed of electric motor and feed pump. They are widely usedin drilling, pumping
                                and other large machine applications. The VFD panels are widelyused in extruder plants,
                                rolling Mills, tube mills, paper mills, cable industryand CTL Linesr.</p>
                        </div>
                        <img class="round" src="../public/images/services/Rectangle 1225.jpg">
                    </div>

                    <div class="card reverse">
                        <img class="round" src="../public/images/services/Rectangle 1226.jpg">
                        <div>
                            <h4>Flame Proof Panel</h4>
                            <p>Flame-proof panels are mostly used in the place where concentration of flam
                                mable gases, vapors or dust occurs. Electrical equipment that must be installed
                                in such conditions is specially designed with flame proof enclosure to ensure it
                                does not initiate an explosion due to arcing contacts or high surfacec temperature of
                                instrument.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <h4>Test Bench Panel</h4>
                            <p>The Main purpose of this panel is to Test Instrument like single phase three phase motor,
                                thyristors transformers, various parameters like current, voltage, resistancesetc.Acting as
                                a 24 Vdc power supply, DOL(direct online starter) starter, star delta starter, Radical
                                calibrator, multimeter, variac, 110V DC supply, etc</p>
                        </div>
                        <img class="round" src="../public/images/services/Rectangle 1227.jpg">
                    </div>


                </div>

                <div v-else class="seconds">
                    <h2>Electrical Services</h2>

                    <div class="card">
                        <img class="round" src="../public/images/services/Rectangle 1233.png">
                        <div>
                            <h4>Electrical HT and LT Electrification</h4>
                            <p>Motor Control Centers are suitable for operation of motors ranging from 0.5HP
                                to 500 HP ratings. Motor control center contains various types of starting viz.
                                Direct on line (DOL), Star-Delta, autotransformer, Soft starter etc. Local and
                                remote operation facility, IMCC compatible to PLC/DCS based operation.
                                Motor Control Center is properly ventilated in case of higher size of motor
                                starter. Component layout is made to facilitate ease of operation and
                                maintenance. This control panel is designed as per the latest technological advancements.
                            </p>
                        </div>
                    </div>

                    <div class="list">
                        <h4>Energy bill audit -HT/LT/ EHV</h4>
                        <p>We are one of the leading Supplier & Service provider of South Gujarat region the field
                            Electrical Power Distribution & Transmission located at Surat since last two decades</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div class="list">
                        <h4>DG set / CPP registration </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable.</p>
                    </div>

                    <div class="list">
                        <h4>Guideline for Electrical Duty Exemption </h4>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                            anything embarrassing hidden in the middle of text.</p>
                    </div>

                    <div class="list">
                        <h4>Govt. Declare Addi. Unit Subsidy </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                            making this the first true generator on the Internet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Reviews />
    <Footer></Footer>
</template>
<style scoped>
/* ------------------------------------ services section --------------------- */


.services .tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 90px;
}

.services .tabs h4 {
    margin: 0;
    padding: 0.6em;
    text-align: center;
    background-color: var(--color-surface-variant);
}

.services .tabs h4:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
}

.services .tabs h4:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
}


.services .tabs .active {
    background-color: #2B2B2B;
}





/* first */

.services h2 {
    margin: 0;
}

.services .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
}

.services .card:last-child {
    margin-bottom: 50px;
}

.services img {
    width: 100%;
}

.services h4 {
    margin: 0;
}

.services p {
    color: var(--color-on-surface-700);
}


/* seconds */


.services .seconds .list p {
    display: flex;
    margin-top: 0;
    margin-bottom: 10px;
}

.services .seconds .list h4 {
    margin-bottom: 0.6em;
    margin-top: 1em;
}

.services .seconds .list p::before {
    content: url('../public/images/arrow-gray.png');
    margin-top: 4px;
    margin-right: 10px;
}


@media only screen and (max-width: 700px) {
    .services .card {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .services .card.reverse{
        flex-direction: column-reverse;
    }

    .services .tabs h4 {
    font-size: calc(var(--medium-2-font) - 2px);
}
}
</style>