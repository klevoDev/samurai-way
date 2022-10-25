import classes from "./Playlist.module.css";


export const Playlist = () => {
    return (
        <div className={classes.wrapPlaylist}>
            <img className={classes.img} src="https://imagine-club.com/sites/default/files/photos/bud_kak_doma_putnik_-_trolli_korol_i_shut_2_lp_zbs_eu.jpg" alt=""/>
            <div className={classes.body}>
                <h3>Russian songs</h3>
                <div>There are 54 songs in total</div>
                <div>Total duration 17 hours</div>
            </div>

        </div>
    )
}