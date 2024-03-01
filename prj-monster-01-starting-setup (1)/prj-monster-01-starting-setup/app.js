//value attack
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessage: []
        };
    },
    computed: {
        // hiển thị thanhs máu theo %
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: "0%" };
            }
            return {
                width: this.monsterHealth + "%",
                backgroundColor: this.monsterHealth > 50 ? "#00a876" : "red",
            };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: "0%" };
            }
            return {
                width: this.playerHealth + "%",
                backgroundColor: this.playerHealth > 50 ? "#00a876" : "red",
            };
        },
        // 3 round speciaAttack 1 lần
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },

    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                // monster lost
                this.winner = "player";
            }
        },
    },
    methods: {
        // newGame
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessage = []
        },
        // monster tấn công và gọi luôn attackPlayer
        attackMonster() {
            this.currentRound++;
            console.log("monster", this.monsterHealth);
            console.log("player", this.playerHealth);
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLongMessage("player", "attack", attackValue);
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLongMessage("monster", "attack", attackValue);
        },
        // tấn công đặc biệt lên monster và tấn công người chơi
        speciaAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLongMessage("player", "attack", attackValue);
        },
        //hồi máu và gọi attackPlayer tấn công người chơi
        healPlayer() {
            console.log("healPlayer", this.playerHealth);
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue >= 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.addLongMessage("player", "heal", healValue)
        },
        surrender() {
            this.winner = "monster";
        },
        addLongMessage(who, what, attack) {
            this.logMessage.unshift({
                actionWho: who,
                actionWhat: what,
                actionActtack: attack
            })
        },
        logClass(message) {
            return {
                'log--player': message.actionWho === "player",
                'log--monster': message.actionWho === "monster",
                // 'log--damage': message.actionWhat === this.attack,
                'log--heal': message.actionWhat === "heal",
            }
        }
    },
});
app.mount("#game");
