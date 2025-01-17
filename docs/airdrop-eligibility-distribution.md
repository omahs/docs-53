---
id: airdrop-eligibility-distribution
title: $ARB airdrop eligibility and distribution specifications
sidebar_label: Airdrop eligibility and distribution
description: Learn about the $ARB airdrop eligibility and distribution specifications.
dao_author: pearring
dao_sme: pearring
---

import DraftExpectationsPartial from '@site/docs/partials/_draft-expectations-partial.md'; 

<DraftExpectationsPartial />

:::caution THERE IS NO PRESALE

The only official website for the $ARB airdrop is [https://arbitrum.foundation](https://arbitrum.foundation). There is no presale. Don't ever share your seed phrase. When in doubt, [join the Discord](https://discord.gg/arbitrum) to ask for clarification.

:::

<a data-quicklook-from='arb'>$ARB</a> is an ERC-20 <a data-quicklook-from='governance-token'>governance token</a> native to the <a data-quicklook-from='arbitrum-one'>Arbitrum One</a> rollup chain. Token properties at launch:


<table className="small-table">
    <tr>
        <td><strong>Initial supply cap</strong></td>
        <td>10 billion</td>
    </tr>
    <tr>
        <td><strong>Inflation</strong></td>
        <td>Max 2% per year</td>
    </tr>
    <tr>
        <td><strong>Minting/burning mechanism</strong></td>
        <td>L2 smart contract</td>
    </tr>
    <tr>
        <td><strong>Bridgeable to Ethereum L1?</strong></td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><strong>Tokens launch on</strong></td>
        <td>Arbitrum One</td>
    </tr>
    <tr>
        <td><strong>On-chain governance (voting) happens on</strong></td>
        <td>Arbitrum One</td>
    </tr>
    <tr>
        <td><strong>Airdrop snapshot</strong></td>
        <td><a href='https://arbiscan.io/block/58642080'>Block 58642080</a> on Arbitrum One = February 6th, 2023</td>
    </tr>
</table>


### Initial token allocation & airdrop distribution

<table className="small-table">
    <tr>
        <td><strong>Percentage of initial supply</strong></td>
        <td><strong>Number of tokens</strong></td>
        <td><strong>Allocated to</strong></td>
    </tr>
    <tr>
        <td>42.78%</td>
        <td>4.278 billion</td>
        <td>Arbitrum DAO treasury</td>
    </tr>
    <tr>
        <td>26.94%</td>
        <td>2.694 billion</td>
        <td>Offchain Labs Team and Future Team + Advisors</td>
    </tr>
    <tr>
        <td>17.53%</td>
        <td>1.753 billion</td>
        <td>Offchain Labs investors</td>
    </tr>
    <tr>
        <td>11.62%</td>
        <td>1.162 Billion</td>
        <td><strong>Users</strong> of the Arbitrum platform (via airdrop to user wallet addresses)</td>
    </tr>
    <tr>
        <td>1.13%</td>
        <td>113 million</td>
        <td><strong>DAOs</strong> building apps on Arbitrum (via airdrop to DAO treasury addresses)</td>
    </tr>
</table>





### User airdrop eligibility details

A points system was used to determine the number of tokens that airdrop recipients can claim. Points criteria was focused primarily on Arbitrum One; however, there was a small subset of criteria applied to activity on Arbitrum Nova. Points earned on Arbitrum Nova could either bring a user up to 4 points total, or give them one additional point if they had already scored 4 points or more on Arbitrum One. You earn maximum one point per qualifying action performed before the snapshot date. Point scores were capped at 15.

Additionally, as the criteria and design of the airdrop as a whole was intentioned to reward early adopters, points scored (minimum of three) before Arbitrum Nitro was launched on Arbitrum One mainnet are worth twice as much as points scored after. Arbitrum Nitro launched on Arbitrum One mainnet at block #22207817.

**Qualifying actions:**

Points earned on Arbitrum One

 1. Bridged funds into Arbitrum One
 2. Conducted transactions during two distinct months
 3. Conducted transactions during six distinct months
 4. Conducted transactions during nine months
 5. Conducted more than four transactions or interacted with more than four different smart contracts
 6. Conducted more than ten transactions or interacted with more than ten different smart contracts
 7. Conducted more than 25 transactions or interacted with more than 25 different smart contracts
 8. Conducted more than 100 transactions or interacted with more than 100 different smart contracts
 9. Conducted transactions exceeding in the aggregate $10,000 in value
 10. Conducted transactions exceeding in the aggregate $50,000 in value
 11. Conducted transactions exceeding in the aggregate $250,000 in value
 12. Deposited more than $10,000 of liquidity into Arbitrum 
 13. Deposited more than $50,000 of liquidity into Arbitrum
 14. Deposited more than $250,000 of liquidity into Arbitrum

Points earned on Arbitrum Nova  

 1. Bridged funds into Arbitrum Nova
 2. Conducted more than three transactions
 3. Conducted more than five transactions
 4. Conducted more than ten transactions

<br />

**Converting points to tokens:**

<table className="small-table">
    <tr>
        <td><strong>Points earned</strong></td>
        <td><strong>Airdrop entitlement</strong></td>
    </tr>
    <tr>
        <td>Less than 3</td>
        <td>Not eligible</td>
    </tr>
    <tr>
        <td>3</td>
        <td>1,200</td>
    </tr>
    <tr>
        <td>4</td>
        <td>1,700</td>
    </tr>
    <tr>
        <td>5</td>
        <td>2,200</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3,200</td>
    </tr>
    <tr>
        <td>7</td>
        <td>3,700</td>
    </tr>
    <tr>
        <td>8</td>
        <td>4,200</td>
    </tr>
    <tr>
        <td>9</td>
        <td>6,200</td>
    </tr>
    <tr>
        <td>10</td>
        <td>6,700</td>
    </tr>
    <tr>
        <td>11</td>
        <td>7,200</td>
    </tr>
    <tr>
        <td>12 or more</td>
        <td>10,200</td>
    </tr>
</table>

<br />

**User protections:**

To prevent bots from taking advantage of the airdrop, a number of anti-Sybil rules were established:

 - If an airdrop recipient's wallet transactions have all occurred within a 48-hour period, **one point is subtracted**.
 - If an airdrop recipient's wallet balance is less than .005 ETH, **and** if the wallet hasn't interacted with more than one smart contract, **one point is subtracted**.
 - If an airdrop recipient's wallet address has been identified as a Sybil address during the Hop protocol bounty program **the recipient is disqualified**. 

Refer to [Arbitrum Sybil Hunting](https://github.com/ArbitrumFoundation/sybil-detection) to learn more about the Sybil mitigation methodology. Refer to our [Sybil accounts](./concepts/sybil-account.md) concept document for a conceptual introduction to Sybil accounts.

### DAO airdrop criteria and distribution

A separate distribution was allocated for DAOs that are building applications in the Arbitrum ecosystem, as well as the Protocol Guild, a collective of Ethereum contributors. The distribution of tokens to DAOs was weighted based on a variety of factors, including time projects have been on Arbitrum, TVL of assets on the chain, whether a project was Arbitrum native, and whether project operated with actual on-chain treasuries.

More details will be added around individual DAO allocation shortly.


### Vesting and lockup details

While the user and DAO airdrops will be available in one week, all investor and team tokens are subject to 4 year lockups, with the first unlocks happening in one year and then monthly unlocks for the remaining three years.