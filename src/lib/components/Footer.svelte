<script>
  import Fa from 'svelte-fa';
  import { faWeixin } from '@fortawesome/free-brands-svg-icons';
  import CompanyInfo from './CompanyInfo.svelte';
  import { lang } from '@lib/i18n/language.js';

  const locale = {}
  locale['en']= {
      title: "Have Questions?",
      gotquestions: "If you have any Questions or Remarks concerning EkeSolar Unlimited or EkeSolar Unlimited related Projects and Businesses, Please feel free to contact us anytime.",
      contactus: "Contact us",
      rightsreserved: ""
  }

  locale['nl']= {
      title: "Heeft u Vragen?",
      gotquestions: "Als u Vragen of Opmerkingen met betrekking tot EkeSolar Unlimited of Ekesolar Unlimted gerelateerde Projecten en Businesses, voelt u vrij om ons op elk moment te contacteren.",
      contactus: "Contact",
      rightsreserved: ""
  }

</script>

<style lang="scss">
  .is-secondary {
    color: yellow;

      &:hover {
        color: darkslategray;
      }
  }
</style>

<footer>
  <div class="hero is-black has-text-light">
    <div class="hero-body">
      <div class="container">
        <div class="columns content">

          <section class="widget content column text-3 widget_text">
            <h3 class="subtitle text-secondary-400 italic">{locale[lang].title}</h3>
            <div class="textwidget">
              <p>{locale[lang].gotquestions}</p>
              <p>
              <a class="button is-secondary has-text-black" title="{locale[lang].contactus}!" href="/{lang}/contact-us/">
                  <span class="icon">
                    <Fa icon={faWeixin} />
                  </span>
                  <span>{locale[lang].contactus}</span>
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="container is-size-7 has-text-grey">
      <div class="content">
        <CompanyInfo />
      </div>
    </div>
    <div class="container section">
      <div class="level">
        <div class="level-left">
          <p>
            <span>Copyright © 2022-2222 | All rights reserved to EkeSolar.com</span>
          </p>
        </div>
        <div class="level">
          <p class="logo level-right">
            Powered by <a class="brand font-bold italic drop-shadow" href="/" title="visit ArtKids Foundation Website?">
                        <span class="icon is-medium">
                          <img src="/artkids-logo-32.png" alt="Stichting ArtKids Foundation: Funding Happiness" width="24" height="24">
                        </span>
                        <span class="artkids has-text-danger ">ArtKids</span><span class="foundation text-secondary-400 ">foundation.org</span>
                      </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
